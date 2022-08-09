export interface IDataWhethear{
    positionCur?: Number[] | undefined
    apparent_temperature_max:Number[]| undefined,
    apparent_temperature_min:Number[]| undefined,
    weathercode:Number[]| undefined,
    sunrise:String[]| undefined,
    sunset:String[]| undefined,
    city?:String| undefined,
    current_temp:Number| undefined,
    current_windspeed:Number| undefined,
    current_weathercode:Number| undefined, 
}


export type IDaysWheather = {
    apparent_temperature_max:Number[]| undefined,
    apparent_temperature_min:Number[]| undefined,
    weathercode:Number[]| undefined,
    sunrise:String[]| undefined,
    sunset:String[]| undefined,
}

export interface IDaysElement{
    apparent_temperature_max:Number| undefined
    apparent_temperature_min:Number| undefined
    weathercode:Number| undefined
    sunrise:String| undefined
    sunset:String | undefined
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