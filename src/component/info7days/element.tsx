import React from "react";
import elementCss from './element.module.css'
import son from './../../image/PNG/son.png'
import son_and_cloud from './../../image/PNG/son_and_cloud.png'
import tuman from './../../image/PNG/tuman.png'
import rain from './../../image/PNG/rain.png'
import snow from './../../image/PNG/snow.png'
import grow from './../../image/PNG/grow.png'
import liven from './../../image/PNG/liven.png'
import thunderstorm from './../../image/PNG/thunderstorm.png'

export const Element:React.FunctionComponent<any> = ({day, data}) =>{

    let icon;

    if(data.weathercode == 0) {icon = son} else 
    if(data.weathercode == 1|| data.weathercode == 2|| data.weathercode == 3) {icon = son_and_cloud} else 
    if(data.weathercode == 45 || data.weathercode == 48 || data.weathercode == 51 || data.weathercode == 53
    || data.weathercode == 55 || data.weathercode == 56 || data.weathercode == 57) {icon = tuman} else 
    if(data.weathercode == 61 || data.weathercode == 63 || data.weathercode == 65 || data.weathercode == 66 
        ||data.weathercode == 67) {icon = rain} else 
    if(data.weathercode == 71 || data.weathercode == 73 || data.weathercode == 75 || data.weathercode == 85|| data.weathercode == 86 ) {icon = snow} else 
    if(data.weathercode == 77) {icon = grow} else 
    if(data.weathercode == 80 || data.weathercode == 81 || data.weathercode == 82) {icon = liven} else 
    if(data.weathercode == 95 || data.weathercode == 96 || data.weathercode == 99) {icon = thunderstorm}
    
    return(
            <div className={elementCss.wrapper}>
                <div className={elementCss.top}>
                    <img className={elementCss.img} src={icon}/>
                    <span className={elementCss.official1}>{`+ ${parseInt(data.apparent_temperature_max)}°C`}</span>
                    <span className={elementCss.official2}>{`+ ${parseInt(data.apparent_temperature_min)}°C`}</span>
                </div>
                <div className={elementCss.bottom}>
                    <p className={elementCss.day_week}>{day}</p>
                </div>
            </div>
    )
}