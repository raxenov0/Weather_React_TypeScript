import React from "react";
import loader from './loader.module.css'

export const Loader = () => {
    return(
        <div className={loader.ripple}>
            <div></div>
            <div></div>
        </div>
    )
}