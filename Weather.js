import React from "react";
import axios from "axios";
const APIkey = "535adbff4597f2b7f1f8f5bc7a5b73aa";

export default function Weather(props) {

    function handleResponse(response) {
    alert(`The temperature in ${response.data.name} is ${response.data.main.temp}°C`);
  }

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${APIkey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
  return <h2>Hello from weather </h2>;
}
