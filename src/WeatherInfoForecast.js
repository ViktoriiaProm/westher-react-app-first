/** @format */

import React, { useState, useEffect } from "react";
import "./WeatherInfoForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherInfoForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);


  useEffect(() =>{
  setLoaded(false);
        }, [props.coordinates]);


  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }


  if (loaded) {
    return (
      <div className='WeatherInfoForecast'>
        <div className='row'>
          {forecast.map(function(dailyForecast, index) {
            if (index<5){
            return (
            <div className='col' key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
            );
            }
          })}
          
        </div>
      </div>
    );
  } else {
    let apiKey = `fda3688b1db05987dd5d07c237aecfba`;
    let latitude = props.coordinates.lon;
    let longitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
