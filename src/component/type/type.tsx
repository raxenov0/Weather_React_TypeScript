export interface IDataWeathear{
    positionCur?: number[] | undefined
    apparent_temperature_max:number[]| undefined,
    apparent_temperature_min:number[]| undefined,
    weathercode:number[]| undefined,
    sunrise:string[]| undefined,
    sunset:string[]| undefined,
    city?:string| undefined,
    current_temp:number| undefined,
    current_windspeed:number| undefined,
    current_weathercode:number| undefined, 
}

export interface ICurrentDay{
    day:string
    data:{
        current_temp?:number | undefined,
        current_windspeed?:number | undefined,
        weathercode:number | undefined,
        sunrise?:string | undefined,
        sunset?:string | undefined,
        apparent_temperature_max: number | undefined,
        apparent_temperature_min: number | undefined
    }
}

export interface IDaysElement{
    apparent_temperature_max:number| undefined
    apparent_temperature_min:number| undefined
    weathercode:number| undefined
    sunrise:string| undefined
    sunset:string | undefined
}

export type ICityElement = {
    address: string,
   postal_code: any,
   country: string,
   federal_district: string,
   region_type: string,
   region:string,
   area_type: string,
   area: string,
   city_type: string,
   city: string,
   settlement_type: string,
   settlement: string,
   kladr_id: number,
   fias_id: string,
   fias_level: number,
   capital_marker: number,
   okato: number,
   oktmo: number,
   tax_office: number,
   timezone: string,
   geo_lat: number,
   geo_lon: number,
   population: number,
   foundation_year: number
}

export type INews = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: {id: null, name: string}
    title: string
    url: string
    urlToImage: string
}