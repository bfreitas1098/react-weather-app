import React from "react";

function CurrentDate(props) {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = weekDays[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  } else {
    hours = hours;
  }
  const minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (props.date.getHours() > 12) {
    return `${day} ${hours}:${minutes} PM`;
  } else {
    return `${day} ${hours}:${minutes} AM`;
  }
}

export default CurrentDate;
