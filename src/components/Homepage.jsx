import { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCityWeatherAction } from "../actions";
import Favorites from "./Favorites";
import Weather from "./Weather";

const Homapage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchCity = useSelector((state) => state.searchCity.cityWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    setSearchQuery("");
  }, []);

  const searchCityWeather = (e) => {
    e.key === "Enter" &&
      searchQuery.length > 3 &&
      dispatch(getCityWeatherAction(searchQuery));
  };

  return (
    <>
      <Container>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter the city name</Form.Label>
          <Form.Control
            type="text"
            placeholder="City Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={searchCityWeather}
          />
        </Form.Group>

        <div
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "space-between",
          }}
        >
          <Weather city={searchCity} />
          <Favorites />
        </div>
      </Container>
    </>
  );
};

export default Homapage;
