import { useState, useEffect } from 'react';
import axios from './axios';
import WeatherInfo from './WeatherInfo';
require('dotenv').config();

const api = process.env.REACT_APP_OPENWEATHER_API;
const city = 'Riverside';
const url = `forecast?q=${city}&appid=${api}`;

function GetWeather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  return <WeatherInfo weather={weather} />;
}

export default GetWeather;
