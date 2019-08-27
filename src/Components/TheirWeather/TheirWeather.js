import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TheirWeather extends Component {


  render() {

    const searchedWeather = this.props.searchedWeather;

    return (
      <div id="TheirWeather">
        <div>
          <div className="weather-block">
            <p className="cardHead"> Over there, in <span className="purple-text">{searchedWeather.location}</span></p>
            <p>Temperature right now : <span className="purple-text">{searchedWeather.currentTemp} {this.props.tempUnit}</span></p>
            <p> Humidity: <span className="purple-text">{searchedWeather.humidity}%</span> </p>
            <p> Current weather conditions: <span className="purple-text">{searchedWeather.conditions}</span></p>
            <p>Wind speed: <span className="purple-text">{searchedWeather.windSpeed} {this.props.windUnit}</span></p>
          </div>
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
