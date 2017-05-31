import React, { Component } from 'react';


class TheirWeather extends Component {


  render() {

    const searchedWeather = this.props.searchedWeather;

    return (
      <div id="TheirWeather">
        <div id="TheirWeatherInner">
          <h2 className="cardHead"> Over there in {searchedWeather.location}</h2>
          <h3>Temperature right now : {searchedWeather.currentTemp} {this.props.tempUnit}</h3>
          <h3> Humidity: {searchedWeather.humidity} </h3>
          <h3> Current weather conditions: {searchedWeather.conditions}</h3>
          <h3>Wind speed: {searchedWeather.windSpeed} {this.props.windUnit}</h3>
        </div>
      </div>
    );
  }
}

export default TheirWeather;
