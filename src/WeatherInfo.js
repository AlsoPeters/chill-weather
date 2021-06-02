import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';
import { Panel } from 'rsuite';

const dayjs = require('dayjs');

export default function WeatherInfo(props) {
  console.log(props.weather);

  if (props.weather === null) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: 'inline-block', width: 240 }}
      >
        <div style={{ fontSize: '160px', textAlign: 'center' }}>
          <WeatherIcon
            iconId={props.weather.list[3].weather[0].id}
            name='owm'
            night={true}
          />
        </div>
        {/* <img
          src={`http://openweathermap.org/img/wn/${props.weather.list[3].weather[0].icon}@2x.png`}
          alt={props.weather.list[3].weather[0].icon}
          height='240'
        /> */}

        <Panel
          text
          style={{ textAlign: 'center' }}
          header={dayjs(props.weather.list[3].dt_txt).format('dddd')}
        >
          <p>
            <small>{props.weather.list[3].weather[0].description}</small>
          </p>
        </Panel>
      </Panel>

      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: 'inline-block', width: 240 }}
      >
        <div style={{ fontSize: '160px', textAlign: 'center' }}>
          <WeatherIcon
            iconId={props.weather.list[11].weather[0].id}
            name='owm'
            night={true}
          />
        </div>
        <Panel
          text
          style={{ textAlign: 'center' }}
          header={dayjs(props.weather.list[11].dt_txt).format('dddd')}
        >
          <p>
            <small>{props.weather.list[11].weather[0].description}</small>
          </p>
        </Panel>
      </Panel>

      <Panel
        shaded
        bordered
        bodyFill
        style={{ display: 'inline-block', width: 240 }}
      >
        <div style={{ fontSize: '160px', textAlign: 'center' }}>
          <WeatherIcon
            iconId={props.weather.list[19].weather[0].id}
            name='owm'
            night={true}
          />
        </div>
        <Panel
          text
          style={{ textAlign: 'center' }}
          header={dayjs(props.weather.list[19].dt_txt).format('dddd')}
        >
          <p>
            <small>{props.weather.list[19].weather[0].description}</small>
          </p>
        </Panel>
      </Panel>
    </>
  );
}
