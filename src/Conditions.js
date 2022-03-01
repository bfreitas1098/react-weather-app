import React from "react";

import "./Conditions.css";

export default function Conditions() {
  let conditionsData = {
    description: "Sunny",
    humidity: "60",
    wind: "10",
  };
  return (
    <div className="Conditions">
      <div className="row temp-label-row max-min-label">
        <div className="col-1 high-temp">High</div>
        <div className="col-1 low-temp">Low</div>
      </div>
      <div className="row temp-number-row">
        <div className="col-1 temp-max">82°</div>
        <div className="col-1 temp-min">70°</div>
      </div>
      <div className="row weather-conditions">
        <div className="col-8 conditions">
          Conditions:{" "}
          <span className="conditions">{conditionsData.description}</span>
        </div>
        <div className="col-8 humidity">
          Humidity: <span>{conditionsData.humidity}</span>%
        </div>
        <div className="col-8 wind-conditions">
          Wind: <span>{conditionsData.wind}</span> mph
        </div>
      </div>
    </div>
  );
}
