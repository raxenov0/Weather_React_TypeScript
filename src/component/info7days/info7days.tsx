import React, { FunctionComponent, useState, useEffect } from "react";
import { ICurrentDay, IDataWeathear, IDaysElement } from "../type/type";
import { Element } from "./element";
import dat from './info7days.module.css'
import { Today } from "./today";


interface IDataWeathearProps{
    Props:IDataWeathear | null
}
export const Info7days: FunctionComponent<IDataWeathearProps> = ({Props}) => {
  const [items, setItems] = useState<IDaysElement[]>([])

    const Today_Info:ICurrentDay = {
        day:getDay(0),
        data:{
            current_temp:Props?.current_temp,
            current_windspeed:Props?.current_windspeed,
            sunrise:Props?.sunrise ? Props.sunrise[0]: undefined,
            sunset:Props?.sunset ? Props.sunset[0]: undefined,
            weathercode:Props?.weathercode ? Props.weathercode[0]: undefined,
            apparent_temperature_max:Props?.apparent_temperature_max ? Props.apparent_temperature_max[0]: undefined,
            apparent_temperature_min:Props?.apparent_temperature_min ? Props.apparent_temperature_min[0]: undefined,
        }
    }

   


    function getDay(index: number): string {
        const CurrentDay = new Date().getDay() + index;
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[CurrentDay % 7]
    }

  

    function dataSeparation() {
        let array: IDaysElement[] = []
        for (let i = 1; i < 7; i++) {
            array.push({
                apparent_temperature_max: Props?.apparent_temperature_max? Props.apparent_temperature_max[i] : undefined,
                apparent_temperature_min: Props?.apparent_temperature_min ?  Props.apparent_temperature_min[i] : undefined,
                weathercode: Props?.weathercode ? Props.weathercode[i] : undefined,
                sunrise: Props?.sunrise ?  Props.sunrise[i] : undefined,
                sunset: Props?.sunset ?  Props.sunset[i] : undefined
            })
        }
        setItems(array)

    }

    useEffect(() => {

        dataSeparation()
    }, [ Props?.apparent_temperature_max])

    return (
        <div key={1} className={dat.stroke}>
            <div className={dat.main_element}>
                <Today Props={Today_Info} />
            </div>
            {items.map((e, index) => (<Element day={getDay(index + 1)} data={e} key={index} />))}
        </div>
    )
}
