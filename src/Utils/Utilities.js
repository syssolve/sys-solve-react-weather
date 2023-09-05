import Axios from "axios";
import * as Constants from "../Utils/Constants";

export const GetCity = async (cityName) => {
  return await Axios.get(`${Constants.API_URL_CITY}?city=${cityName}`, {
    headers: { "X-Api-Key": Constants.API_URL_CITY_KEY },
  }).then(function (response) {
    if (response.data.total === 0) {
      return;
    }
    return response.data[0];
  });
};

export const GetWeather = async (lat, lon) => {
  return await Axios.get(
    `${Constants.API_URL_WEATHER}?lat=${lat}&lon=${lon}&units=metric&appid=${Constants.API_URL_WEATHER_KEY}`
  ).then(function (response) {
    return response.data;
  });
};

export const GetCityImage = async (cityName) => {
  return await Axios.get(
    `${Constants.API_URL_CITY_IMAGE}?query=${cityName}&client_id=${Constants.API_URL_CITY_IMAGE_KEY}`
  ).then(function (response) {
    if (response.data.total === 0) {
      return;
    }
    return response.data.results[0].urls;
  });
};

export const GetArrayNewId = (array) => {
  return Math.max.apply(
    Math,
    array.map(function (o) {
      return o.y;
    })
  );
};
