import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="col-md-4 offset-md-4 md-auto">
      <form>
        <input
          type="search"
          className="search-input"
          placeholder="Search a city"
          autoComplete="off"
          autoFocus="on"
        />
      </form>
      <div className="col-sm-auto">
        <button className="search-button">
          <span role="img" aria-label="magnifying glass">
            🔍
          </span>
        </button>
      </div>
      <div className="col-sm-auto">
        <button className="current-button">
          <span role="img" aria-label="pin">
            📍
          </span>
        </button>
      </div>
    </div>
  );
}
