import { Component } from "react";
import { GetCity, GetCityImage, GetWeather } from "../Utils/Utilities";
import { Card, Col, ListGroup } from "react-bootstrap";

export default class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.CityName = props.CityName;
    this.state = {
      IsLoaded: false,
    };
  }

  async componentDidMount() {
    const city = await GetCity(this.CityName);
    if (typeof city === "undefined") {
      return;
    }
    const cityImage = await GetCityImage(this.CityName);
    if (typeof cityImage === "undefined") {
      return;
    }
    const weather = await GetWeather(city.latitude, city.longitude);
    if (typeof weather === "undefined") {
      return;
    }
    this.setState({
      City: city,
      Weather: weather,
      CityImage: cityImage,
      IsLoaded: true,
    });
  }

  render() {
    return (
      this.state.IsLoaded && (
        <Col className="col-padding">
          <Card style={{ padding: "64px" }}>
            <Card.Img
              variant="top"
              src={this.state.CityImage.regular}
              className="image-rate"
              width={400}
              height={300}
            />
            <Card.Body>
              <Card.Title>
                {this.state.City.name}, {this.state.City.country}
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                Temp:{this.state.Weather.main.temp}
              </ListGroup.Item>
              <ListGroup.Item>
                Feels Like:{this.state.Weather.main.feels_like}
              </ListGroup.Item>
              <ListGroup.Item>
                Min:{this.state.Weather.main.temp_min}
              </ListGroup.Item>
              <ListGroup.Item>
                Min:{this.state.Weather.main.temp_max}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      )
    );
  }
}
