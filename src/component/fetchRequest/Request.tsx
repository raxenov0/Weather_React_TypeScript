import { IDataWeathear } from "../type/type"

export async function getCurrentParams(Function: any, Data: IDataWeathear | null, Geop?: Number[], setterFn?:any) {
    setterFn(true)
    if (Geop) {
        await getWeatherData(Geop, Function)
        setterFn(false)
    }
    else {
        navigator.geolocation.getCurrentPosition(async function (position) {
            var CurrentPosition: Number[] = []
            CurrentPosition = [position.coords.latitude, position.coords.longitude]
            await getWeatherData(CurrentPosition, Function)
            setterFn(false)
        }, async function () {
            var CurrentPosition: Number[] = []
            CurrentPosition = [	55.7522, 37.6156]
            await getWeatherData(CurrentPosition, Function)
            setterFn(false)
        })
    }
    
}
export async function getWeatherData(position: Number[], Function?: any) {
    var response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position[0]}&longitude=${position[1]}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=Europe%2FMoscow`).then(rs => rs.json())
    var response2 = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position[0]}&lon=${position[1]}&limit=5&appid=6b66fdc6e2ef0bb788b8a0272a0318ca`).then(rs => rs.json())
    var response3 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position[0]}&longitude=${position[1]}&hourly=temperature_2m,relativehumidity_2m,pressure_msl,weathercode&current_weather=true&timezone=Europe%2FMoscow`).then(rs => rs.json())
    Function({
        positionCur: position,
        apparent_temperature_max: response.daily.apparent_temperature_max,
        apparent_temperature_min: response.daily.apparent_temperature_min,
        weathercode: response.daily.weathercode,
        sunrise: response.daily.sunrise,
        sunset: response.daily.sunset,
        city: response2[0].name,
        current_temp: response3.current_weather.temperature,
        current_windspeed: response3.current_weather.windspeed,
        current_weathercode: response3.current_weather.weathercode,
    })
}

export async function getCurrentCity(position: Number[], Function: any, Data: IDataWeathear | null) {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position ? position[0] : 40}&lon=${position ? position[1] : 40}&limit=5&appid=f79fbc27080444899621a46a9452629a`).then(rs => rs.json())
    Function?.({
        ...Data, city: response[0].name
    })
}

export async function getNewsData() {
    const responce = await fetch(`https://newsapi.in/newsapi/country=643?news.php?key=h164MSSDWUoqLas8ecWki5mUdgAS4D&category=russia&content_type=full_content`).then(response => response.json())
    return responce
}


