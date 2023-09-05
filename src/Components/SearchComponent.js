import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchComponent({ AddCity }) {
  const [cityName, setCityName] = useState("");

  const AddCityEvent = () => {
    AddCity(cityName);
    setCityName("");
  };

  const CityTextOnChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="Search City"
        onChange={CityTextOnChange}
        value={cityName}
      ></Form.Control>
      <Button variant="success" onClick={AddCityEvent}>
        Search
      </Button>
    </InputGroup>
  );
}
