import React from "react";

function Date(props) {
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}

export default Date;
