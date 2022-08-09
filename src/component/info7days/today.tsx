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

export const Today: React.FunctionComponent<any> = ({ data, day, sunrise, sunset, current_temp, current_windspeed }) => {

    let icon;
    let weather_condition;

    if (data?.weathercode == 0) { icon = son; weather_condition = 'Безоблачно, Чистое небо' } else
        if (data?.weathercode == 1 || data?.weathercode == 2 || data?.weathercode == 3) { icon = son_and_cloud; weather_condition = "Преимущественно ясно" } else
            if (data?.weathercode == 45 || data?.weathercode == 48 || data?.weathercode == 51 || data?.weathercode == 53
                || data?.weathercode == 55 || data?.weathercode == 56 || data?.weathercode == 57) { icon = tuman; weather_condition = 'Атмосферные осадки, мелкий дождь' } else
                if (data?.weathercode == 61 || data?.weathercode == 63 || data?.weathercode == 65 || data?.weathercode == 66
                    || data?.weathercode == 67) { icon = rain; weather_condition = 'Дождь' } else
                    if (data?.weathercode == 71 || data?.weathercode == 73 || data?.weathercode == 75 || data?.weathercode == 85 || data?.weathercode == 86) { icon = snow; weather_condition = 'Снегопад' } else
                        if (data?.weathercode == 77) { icon = grow; weather_condition = 'Временный град' } else
                            if (data?.weathercode == 80 || data?.weathercode == 81 || data?.weathercode == 82) { icon = liven; weather_condition = 'Ливневые дожди' } else
                                if (data?.weathercode == 95 || data?.weathercode == 96 || data?.weathercode == 99) { icon = thunderstorm; weather_condition = 'Гроза' }

    return (
        <div className={today.wrapper}>

            <div className={today.top}>
                <img className={today.img} src={icon} />
                <span className={today.official1}>{`+ ${parseInt(data?.apparent_temperature_max)}°C`}</span>
                <span className={today.official2}>{`+ ${parseInt(data?.apparent_temperature_min)}°C`}</span>
            </div>
            <div className={today.bottom}>
                <p>{`Прямо сейчас +${parseInt(current_temp)}°C`}</p>
                <span>{weather_condition}</span>
            </div>
            <div className={today.sunset_sunrise}>
                <div className={today.sunrise}>
                    <span>{`Рассвет ${sunrise ? sunrise[0].split('T')[1] : null}`}</span>
                    <img src={sunrise1}></img>
                </div>
                <div className={today.sunset}>
                    <span>{`Закат ${sunset ? sunset[0].split('T')[1] : null}`}</span>
                    <img src={sunset1}></img>
                </div>
                <div className={today.mutual_info}>
                    <img src={windspeed}></img>
                    <p>{`${current_windspeed} км/ч`}</p>

                </div>
            </div>
            <p className={today.day_week}>{day}</p>
        </div>
    )
}