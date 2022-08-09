import React from "react";
import header from './header.module.css'

export const Header: React.FunctionComponent<any> = ({ city }) => {


    let currentDate = new Date().toLocaleString().split(',')[0]
    var day_numb = new Date().getDay();
    var month_numb = new Date().getMonth()
    let current_split_day = currentDate.split('.');
    const calend_day: Array<string> = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const calend_month: Array<string> = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',]
    let Day: string = calend_day[day_numb]
    let month: string = calend_month[month_numb]


    return (
        <header className={header.wrapper} id='root'>
            <div className={header.date}>{`${Day}, ${parseInt(current_split_day[0])} ${month} ${current_split_day[2]} `}</div>
            <div className={header.city}>{city}</div>
        </header>
    )
}