import React from "react";

function WeatherIcon(props) {
  const iconMapping = {
    "01d": "bi bi-brightness-high",
    "01n": "bi bi-moon",
    "02d": "bi bi-cloud-sun",
    "02n": "bi bi-cloud-moon",
    "03d": "bi bi-cloud",
    "03n": "bi bi-cloud",
    "04d": "bi bi-clouds",
    "04n": "bi bi-clouds",
    "09d": "bi bi-cloud-drizzle",
    "09n": "bi bi-cloud-drizzle",
    "10d": "bi bi-cloud-rain-heavy",
    "10n": "bi bi-cloud-rain-heavy",
    "11d": "bi bi-cloud-lightning",
    "11n": "bi bi-cloud-lightning",
    "13d": "bi bi-snow2",
    "13n": "bi bi-snow2",
    "50d": "bi bi-cloud-haze",
    "50n": "bi bi-cloud-haze",
  };

  return <i className={iconMapping[props.code]}></i>;
}

export default WeatherIcon;
