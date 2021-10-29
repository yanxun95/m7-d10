import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCityToFavAction } from "../actions";

const Weather = ({ city }) => {
  const temCelsius = Math.floor(city.main.temp - 273.15);
  const feelLikeTemCelsius = Math.floor(city.main.feels_like - 273.15);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        textAlign: "start",
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "500" }}>
        <span>
          {city.name}, {city.sys.country}
        </span>
      </div>
      <div style={{ fontSize: "2rem", fontWeight: "500" }}>
        <span>{temCelsius}&deg;C</span>
      </div>
      <div>
        <span>Feels like {feelLikeTemCelsius}&deg;C</span>
      </div>
      <div>
        <span>Humidity: {city.main.humidity}%</span>
      </div>
      <Button
        variant="primary"
        onClick={() => dispatch(addCityToFavAction(city))}
      >
        Add
      </Button>
    </div>
  );
};

export default Weather;
