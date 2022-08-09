import React, { FunctionComponent, useState, useEffect } from "react";
import { IDataWeathear, IDaysElement } from "../type/type";
import { Element } from "./element";
import dat from './info7days.module.css'
import { Today } from "./today";



export const Info7days: FunctionComponent<IDataWeathear> = ({
    apparent_temperature_max, apparent_temperature_min, weathercode, sunrise, sunset, city, current_temp,
    current_windspeed, current_weathercode
}: IDataWeathear) => {


    function getDay(index: number): String {
        const CurrentDay = new Date().getDay() + index;
        var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[CurrentDay % 7]
    }

    const [items, setItems] = useState<IDaysElement[]>([])

    function dataSeparation() {
        let array: IDaysElement[] = []
        for (let i = 1; i < 7; i++) {
            array.push({
                apparent_temperature_max: apparent_temperature_max ? apparent_temperature_max[i] : undefined,
                apparent_temperature_min: apparent_temperature_min ? apparent_temperature_min[i] : undefined,
                weathercode: weathercode ? weathercode[i] : undefined,
                sunrise: sunrise ? sunrise[i] : undefined,
                sunset: sunset ? sunset[i] : undefined
            })
        }
        setItems(array)

    }

    useEffect(() => {

        dataSeparation()
    }, [apparent_temperature_max])
    console.log()

    return (
        <div key={1} className={dat.stroke}>
            <div className={dat.main_element}>
                <Today day={getDay(0)} sunrise={sunrise} sunset={sunset} current_temp={current_temp} current_windspeed={current_windspeed} data={items[0]} />
            </div>
            {items.map((e, index) => (<Element day={getDay(index + 1)} data={e} key={index} />))}
        </div>
    )
}
