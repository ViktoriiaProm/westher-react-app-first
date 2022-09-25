/** @format */

import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfoForecast.css";
import axios from "axios";

export default function WeatherInfoForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = `314ac09a5ce700faa84a4e8fcdd355c8`;
  let latitude = props.coordinates.lon;
  let longitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className='WeatherInfoForecast'>
      <div className='row'>
        <div className='col'>
          <div className='WeatherForecast-day'>Thu</div>
          <WeatherIcon code='01d' size={30} />
          <div className='WeatherForecast-temperatures'>
            <span className='WeatherForecast-temperature-max'>19°</span>
            <span className='WeatherForecast-temperature-min'>10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
