export default function WeatherInfo(props) {
  console.log(props.weather);

  //const newWeather = props.weather;
  //console.log(newWeather);
  if (props.weather === null) {
    return <h1>Loading</h1>;
  }
  return <div>{props.weather.city.name}</div>;
}
