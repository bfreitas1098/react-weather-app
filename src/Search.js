import React from "react";

import "./Search.css";

function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="search"
          placeholder="Enter a location"
          autoFocus="on"
          className="search-box"
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
    </div>
  );
}

export default Search;
