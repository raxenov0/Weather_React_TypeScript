import React, { useEffect, useState } from "react";
import news from './news.module.css'
import news_paper from './../../image/PNG/news_paper.png'
import { Element_news } from "./element_news";
import { getNewsData } from "../fetchRequest/Request";
import { INews } from "../type/type";

export const News_data = () => {
    const [newsData, setNewsData] = useState<INews[]>([])

    async function setNews() {
        const responce = await getNewsData()
        setNewsData(responce)
    }
    useEffect(() => {
        setNews()
    }, [])
    return (
        <div className={news.wrapper}>
            <div className={news.header}>
                <p>Новости</p>
                <img className={news.images} src={news_paper} />
            </div>
            <Element_news news={newsData[0]} />
            <Element_news news={newsData[1]} />
        </div>
    )
}