import { useState, useEffect } from 'react';
import axios from './axios';
require('dotenv').config();

const api = process.env.REACT_APP_OPENWEATHER_API;
const city = 'Riverside';
const url = `forecast?q=${city}&appid=${api}`;

function GetWeather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      console.log(request);
      setWeather(request.data.list[0].weather);
      return request;
    }
    fetchData();
  }, [url]);
  console.log(weather);
  return (
    <div>
      <h1>This is from GetWeather</h1>
    </div>
  );
}

export default GetWeather;
