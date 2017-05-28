import React, { Component } from 'react';
import TheirWeather from "./TheirWeather"


class SavedSearches extends Component {

  render() {
    const saved = this.props.saved.map(item =>{
        return <li key={item.location}>
        <h5>{item.location}</h5>{this.props.tempUnit}
        <h5>Currently: {item.currentTemp} &#8457;</h5>
        <h5>{item.humidity}</h5>
        <h5>{item.conditions}</h5>
        <h5>{item.windSpeed} mph</h5>{this.props.windUnit}
        <hr />
        </li>
      })
    return (
      <div className="SavedSearches">
      <h3>Saved Searches</h3>
      <ul>{saved}</ul>
      </div>
    );
  }
}

export default SavedSearches;
