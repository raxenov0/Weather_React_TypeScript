import React from "react";
import element from './element_news.module.css'


export const Element_news: React.FunctionComponent<any> = ({news}) => {
    console.log(news)
    return (
        <div className={element.wrapper}>
            <div className={element.text_img}>
                <div className={element.text}>
                    <div className={element.header}>
                        <p className={element.p}>{`${news?.title != null ? `${news?.title}, ` : ''} ${news?.published_date}`} </p>
                    </div>
                    <div className={element.main_text}>
                        {`${news?.description}`}
                    </div>
                </div>
                <img src={news?.image} className={element.img_new} />
            </div>
        </div>
    )
}