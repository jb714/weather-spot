import React, { Component } from 'react';


class TheirWeather extends Component {

  renderUnits(){
    let temperature = null;
    let windSpeed = null;
    const searchedWeather = this.props.searchedWeather;

    //Conditional rendering block
      if(this.props.tempUnit === "Fahrenheit"){
        temperature = <h3> Temperature right now : {searchedWeather.currentTemp} &#8457;</h3>
        windSpeed = <h3> Wind speed: {searchedWeather.windSpeed} mph</h3>
      } else if (this.props.tempUnit === "Metric"){
        temperature = <h3> Temperature right now : {searchedWeather.currentTemp} &deg;C</h3>
        windSpeed = <h3> Wind speed: {searchedWeather.windSpeed} meters/second</h3>
      } else {
        temperature = <h3> Temperature right now : {searchedWeather.currentTemp} K</h3>
        windSpeed = <h3> Wind speed: {searchedWeather.windSpeed} meters/second</h3>
      }
      return {temperature: temperature, windSpeed: windSpeed}
  }

  render() {

    const searchedWeather = this.props.searchedWeather;
    const temperature = this.renderUnits().temperature;
    const windSpeed = this.renderUnits().windSpeed;

    return (
      <div className="weatherBox" id="TheirWeather">
      <h2> Weather in {searchedWeather.location}</h2>
      {temperature}
      <h3> Humidity: {searchedWeather.humidity} </h3>
      <h3> Current weather conditions: {searchedWeather.conditions}</h3>
      {windSpeed}
      </div>
    );
  }
}

export default TheirWeather;
