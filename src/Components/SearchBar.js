import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <h1>The Weather Spot</h1>
        <input type="text" placeholder="What's the weather in.. ?"/>
        <input type="submit" />
      </div>
    );
  }
}

export default SearchBar;
