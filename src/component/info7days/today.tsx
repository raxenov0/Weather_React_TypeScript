import React from "react";
import today from './element.module.css'
import son from './../../image/PNG/son.png'
import son_and_cloud from './../../image/PNG/son_and_cloud.png'
import tuman from './../../image/PNG/tuman.png'
import rain from './../../image/PNG/rain.png'
import snow from './../../image/PNG/snow.png'
import grow from './../../image/PNG/grow.png'
import liven from './../../image/PNG/liven.png'
import thunderstorm from './../../image/PNG/thunderstorm.png'
import sunset1 from './../../image/PNG/sunset.png'
import sunrise1 from './../../image/PNG/sunrise.png'
import windspeed from './../../image/PNG/windspeed.png'
import { ICurrentDay } from "../type/type";

interface ICurrentDayProps{
    Props:ICurrentDay
}


export const Today: React.FunctionComponent<ICurrentDayProps> = ({Props}) => {


    let icon;
    let weather_condition;

    if (Props.data?.weathercode == 0) { icon = son; weather_condition = 'Безоблачно, Чистое небо' } else
        if (Props.data?.weathercode == 1 || Props.data?.weathercode == 2 || Props.data?.weathercode == 3) { icon = son_and_cloud; weather_condition = "Преимущественно ясно" } else
            if (Props.data?.weathercode == 45 || Props.data?.weathercode == 48 || Props.data?.weathercode == 51 || Props.data?.weathercode == 53
                || Props.data?.weathercode == 55 || Props.data?.weathercode == 56 || Props.data?.weathercode == 57) { icon = tuman; weather_condition = 'Атмосферные осадки, мелкий дождь' } else
                if (Props.data?.weathercode == 61 || Props.data?.weathercode == 63 || Props.data?.weathercode == 65 || Props.data?.weathercode == 66
                    || Props.data?.weathercode == 67) { icon = rain; weather_condition = 'Дождь' } else
                    if (Props.data?.weathercode == 71 || Props.data?.weathercode == 73 || Props.data?.weathercode == 75 || Props.data?.weathercode == 85 || Props.data?.weathercode == 86) { icon = snow; weather_condition = 'Снегопад' } else
                        if (Props.data?.weathercode == 77) { icon = grow; weather_condition = 'Временный град' } else
                            if (Props.data?.weathercode == 80 || Props.data?.weathercode == 81 || Props.data?.weathercode == 82) { icon = liven; weather_condition = 'Ливневые дожди' } else
                                if (Props.data?.weathercode == 95 || Props.data?.weathercode == 96 || Props.data?.weathercode == 99) { icon = thunderstorm; weather_condition = 'Гроза' }

    return (
        <div className={today.wrapper}>

            <div className={today.top}>
                <img className={today.img} src={icon} />
                <span className={today.official1}>{`+ ${Props.data?.apparent_temperature_max}°C`}</span>
                <span className={today.official2}>{`+ ${Props.data?.apparent_temperature_min}°C`}</span>
            </div>
            <div className={today.bottom}>
                <p>{`Прямо сейчас +${Props.data.current_temp}°C`}</p>
                <span>{weather_condition}</span>
            </div>
            <div className={today.sunset_sunrise}>
                <div className={today.sunrise}>
                    <span>{`Рассвет ${Props.data.sunrise ? Props.data.sunrise.split('T')[1] : null}`}</span>
                    <img src={sunrise1}></img>
                </div>
                <div className={today.sunset}>
                    <span>{`Закат ${Props.data.sunset ? Props.data.sunset.split('T')[1] : null}`}</span>
                    <img src={sunset1}></img>
                </div>
                <div className={today.mutual_info}>
                    <img src={windspeed}></img>
                    <p>{`${Props.data.current_windspeed} км/ч`}</p>

                </div>
            </div>
            <p className={today.day_week}>{Props.day}</p>
        </div>
    )
}

// sunrise={ Props?.sunrise} sunset={ Props?.sunset} current_temp={ Props?.current_temp} current_windspeed={ Props?.current_windspeed} data={items[0]}