import React from "react";

function WeatherIcon(props) {
  const iconMapping = {
    "01d": "bi-brightness-high",
    "01n": "bi-moon",
    "02d": "bi-cloud-sun",
    "02n": "bi-cloud-moon",
    "03d": "bi-cloud",
    "03n": "bi-cloud",
    "04d": "bi-clouds",
    "04n": "bi-clouds",
    "09d": "bi-cloud-drizzle",
    "09n": "bi-cloud-drizzle",
    "10d": "bi-cloud-rain-heavy",
    "10n": "bi-cloud-rain-heavy",
    "11d": "bi-cloud-lightning",
    "11n": "bi-cloud-lightning",
    "13d": "bi-snow2",
    "13n": "bi-snow2",
    "50d": "bi-cloud-haze",
    "50n": "bi-cloud-haze",
  };

  return <i className="bi {iconMapping[props.code]}"></i>;
}

export default WeatherIcon;
