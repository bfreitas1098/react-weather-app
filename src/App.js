import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h4 className="mt-2">Boca Raton, USA</h4>
        <div className="date">Wednesday 11:00 AM</div>
        <img
          src="https://cdn.onlinewebfonts.com/svg/img_154.png"
          alt="Weather icon"
        />
        <h1>50°</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <a href="/" rel="noreferrer" className="celsius-link">
              C
            </a>
          </div>
          <div className="col-sm unit-divider">
            <strong>|</strong>
          </div>
          <div className="col-sm">
            <a href="/" rel="noreferrer" className="fahrenheit-link">
              F
            </a>
          </div>
        </div>
        <br />
        <h5 className="mt-3">Partly Cloudy</h5>
        <div className="row">
          <div className="col-sm">
            <h6 className="mt-5">Wind</h6>
            <div className="wind-conditions">5 mph</div>
          </div>
          <div className="col-sm">
            <h6 className="mt-5">Humidity</h6>
            <div className="humidity-conditions">60%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
