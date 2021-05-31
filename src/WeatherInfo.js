import { Panel, PanelGroup } from 'rsuite';

export default function WeatherInfo(props) {
  console.log(props.weather);

  //const newWeather = props.weather;
  //console.log(newWeather);
  if (props.weather === null) {
    return <h1>Loading</h1>;
  }
  return (
    <Panel
      shaded
      bordered
      bodyFill
      style={{ display: 'inline-block', width: 240 }}
    >
      <img src='http://openweathermap.org/img/wn/10d@2x.png' height='240' />
      <Panel header={props.weather.list[0].weather[0].main}>
        <p>
          <small>{props.weather.list[0].weather[0].description}</small>
        </p>
      </Panel>
    </Panel>
  );
}
