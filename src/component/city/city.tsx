import React from "react";
import city from './city.module.css'



const City_element: React.FunctionComponent<any> = ({ setGeoP, ...data }) => {
    function handleClick() {
        setGeoP([data.geo_lat, data.geo_lon])
        console.log("Work")
    }
    return (
        <div className={city.wrapper} onClick={handleClick}>
            {data.address}
        </div>
    )
}
export default City_element