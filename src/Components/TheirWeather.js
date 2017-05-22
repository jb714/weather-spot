import React, { Component } from 'react';


class TheirWeather extends Component {

  render() {
    const searchedWeather = this.props.searchedWeather;

    return (
      <div className="TheirWeather">
      <h2> Weather in {searchedWeather.location}</h2>
      <h3> Temperature right now (in &#8457;): {searchedWeather.currentTemp} &#176;</h3>
      <h4> Daily Low (in &#8457;): {searchedWeather.lowTemp} &#176;</h4>
      <h4> Daily High (in &#8457;): {searchedWeather.highTemp} &#176;</h4>
      <h3> Humidity: {searchedWeather.humidity} </h3>
      <h3> Current weather conditions: {searchedWeather.conditions}</h3>
      <h3> Wind speed: {searchedWeather.windSpeed}mph</h3>
      </div>
    );
  }
}

export default TheirWeather;
