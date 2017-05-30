import React, { Component } from 'react';
import './MyWeather.css';


class MyWeather extends Component {

  render() {
    const localWeather = this.props.localWeather;

    return (

      <div id="MyWeather">
        <div id="MyWeatherWrapper">
        <h3> Here, in {localWeather.location}</h3>
        <h4> Temperature right now : {localWeather.currentTemp} {this.props.tempUnit}</h4>
        <h4> Humidity: {localWeather.humidity} </h4>
        <h4> Current weather conditions: {localWeather.conditions}</h4>
        <h4>Wind speed: {localWeather.windSpeed} {this.props.windUnit}</h4>
        </div>
      </div>
    );
  }
}

export default MyWeather;
