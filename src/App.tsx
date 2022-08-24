import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';
import { getCurrentParams } from './component/fetchRequest/Request';
import { ICityElement, IDataWeathear } from './component/type/type';
import { Info7days } from './component/info7days/info7days'
import { Header } from './component/header/header';
import StateMutual from './ArrayCitys';
import City_element from './component/city/city';
import { News_data } from './component/news/news';
import { Loader } from './UI/Loader/loader';


function App() {

  const [data, setData] = useState<IDataWeathear | null>(null)
  const [geoP, setGeoP] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [value, setValue] = useState<string>('')
  const [ct, setCt] = useState<ICityElement[]>([])
  let Current: ICityElement[] = []

  async function getGlobalData(geoP?: Number[]) {
    await getCurrentParams(setData, data, geoP, setIsLoading)
  }


  const timerHandler: any = useRef()

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(timerHandler.current)
    setValue(e.target.value)
    timerHandler.current = setTimeout(() => {
      if (e.target.value.length) Current = StateMutual.filter((element) => element.city.toLowerCase().includes(e.target.value.toLowerCase()));
      else Current = StateMutual
      setCt(Current)
    }, 500)

  }


  useEffect(() => {
    geoP.length !== 0 ? getGlobalData(geoP) : getGlobalData()
  }, [geoP])
  return (
    <div className="App">
      {isLoading ?
        <Loader />
        :
        <div className="wrapper">
          <div className="left_menu">
            <Header city={data?.city} />
            <Info7days Props={data} />
          </div>
          <div className="right_menu">
            <form className='form_search'>
              <div className="group_search">
                <input value={value} className='input_search' type="text"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleChange(e)}
                  required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label className='label_search'>Another location</label>
              </div>
            </form>
            <div className="container">
              <div className="scrolling">

                {ct.length !== 0 ? ct.map((e, index) => <City_element setGeoP={setGeoP} key={e.address} geo_lat={e.geo_lat} geo_lon={e.geo_lon} address={e.city} />) : <div style={{ fontSize: '24px', fontWeight: '600', color: 'rgb(204 204 204)' }}>Not found</div>}

              </div>
            </div>
            <News_data />
          </div>
        </div>
      }

    </div>
  );
}

export default App;
