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
    hours = props.date.getHours();
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (props.date.getHours() > 12) {
    return (
      <div className="CurrentDate">
        {day} {hours}:{minutes} PM
      </div>
    );
  } else {
    return (
      <div className="CurrentDate">
        {day} {hours}:{minutes} AM
      </div>
    );
  }
}

export default CurrentDate;
