import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyWeather extends Component {

  render() {
    const localWeather = this.props.localWeather;

    return (

      <div id="MyWeather">
        <div id="MyWeatherWrapper">
        <h2 className="cardHead"> Here, in {localWeather.location}</h2>
        <h3> Temperature right now : {localWeather.currentTemp} {this.props.tempUnit}</h3>
        <h3> Humidity: {localWeather.humidity} </h3>
        <h3> Current weather conditions: {localWeather.conditions}</h3>
        <h3>Wind speed: {localWeather.windSpeed} {this.props.windUnit}</h3>
        </div>
      </div>
    );
  }
}

MyWeather.propTypes = {
  localWeather: PropTypes.object,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
}

export default MyWeather;
