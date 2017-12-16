import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TheirWeather extends Component {


  render() {

    const searchedWeather = this.props.searchedWeather;

    return (
      <div id="TheirWeather" className="weatherBlock">
        <div id="TheirWeatherInner">
          <div className="cardHead">
            <h2> Over there, in {searchedWeather.location}</h2>
          </div>
          <h3>Temperature right now : {searchedWeather.currentTemp} {this.props.tempUnit}</h3>
          <h3> Humidity: {searchedWeather.humidity} </h3>
          <h3> Current weather conditions: {searchedWeather.conditions}</h3>
          <h3>Wind speed: {searchedWeather.windSpeed} {this.props.windUnit}</h3>
        </div>
      </div>
    );
  }
}

TheirWeather.propTypes = {
  searchedWeather: PropTypes.object,
  scale: PropTypes.string,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
}

export default TheirWeather;
