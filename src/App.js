import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h4>Boca Raton, USA</h4>
        <span>Now</span>
        <br />
        <img src="https://cdn.onlinewebfonts.com/svg/img_154.png" />
        <h1>50°</h1>
        <span>
          <strong>C</strong>
        </span>
        <span>
          <strong>F</strong>
        </span>
        <br />
        <h5>Partly Cloudy</h5>
        <h6>Wind</h6>
        <div>5 mph</div>
        <h6>Humidity</h6>
        <div>60%</div>
      </div>
    </div>
  );
}

export default App;
