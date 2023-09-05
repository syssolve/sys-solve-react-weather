import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import WeatherComponent from "./Components/WeatherComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchComponent from "./Components/SearchComponent";
import { useState } from "react";
import { GetArrayNewId } from "./Utils/Utilities";

function App() {
  const citiesArray = [
    { Id: 1, Name: "london" },
    { Id: 2, Name: "lima" },
    { Id: 3, Name: "san francisco" },
    { Id: 4, Name: "rome" },
    { Id: 5, Name: "rio de janeiro" },
    { Id: 6, Name: "buenos aires" },
    { Id: 7, Name: "punta cana" },
    { Id: 8, Name: "La Paz" },
    { Id: 9, Name: "Moose Jaw" },
    { Id: 10, Name: "Regina" },
  ];
  const [cities, setCities] = useState(citiesArray);

  const AddCity = (cityName) => {
    setCities((prevCities) => [
      ...prevCities,
      { Id: GetArrayNewId(cities), Name: cityName },
    ]);
  };

  return (
    <Container>
      <br></br>
      <Row xs={1} md={3}>
        <Col></Col>
        <Col>
          <SearchComponent AddCity={AddCity}></SearchComponent>
        </Col>
        <Col></Col>
      </Row>
      <Row xs={1} md={3}>
        {cities.map((e, i) => (
          <WeatherComponent key={e.Id} CityName={e.Name}></WeatherComponent>
        ))}
      </Row>
    </Container>
  );
}

export default App;
