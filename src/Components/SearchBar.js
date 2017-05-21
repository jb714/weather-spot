import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <h1>The Weather Spot</h1>
        <input type="text" />
        <input type="submit" />
      </div>
    );
  }
}

export default SearchBar;
