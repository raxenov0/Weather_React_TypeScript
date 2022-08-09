import React from "react";
import element from './element_news.module.css'


export const Element_news: React.FunctionComponent<any> = ({ news }) => {
    return (
        <div className={element.wrapper}>
            <div className={element.text_img}>
                <div className={element.text}>
                    <div className={element.header}>
                        <p className={element.p}>{`${news?.author != null ? `${news?.author}, ` : ''} ${news?.publishedAt.split('T')[0]}`} </p>
                    </div>
                    <div className={element.main_text}>
                        {`${news?.content.split(' [+')[0]}`}
                    </div>
                </div>
                <img src={news?.urlToImage} className={element.img_new} />
            </div>
        </div>
    )
}