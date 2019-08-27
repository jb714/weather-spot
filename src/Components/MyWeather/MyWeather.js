import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyWeather extends Component {

  render() {
    const localWeather = this.props.localWeather;

    console.log('localWeather!', localWeather);
    
    return (
      <div id="MyWeather">
        <div>
          <div className="weather-block">
            <p className="cardHead"> Here, in <span className="purple-text">{localWeather.location}</span></p>
            <p> Temperature right now : <span className="purple-text"> {localWeather.currentTemp} {this.props.tempUnit}</span></p>
            <p> Humidity: <span className="purple-text">{localWeather.humidity}%</span> </p>
            <p> Current weather conditions: <span className="purple-text">{localWeather.conditions}</span></p>
            <p>Wind speed: <span className="purple-text">{localWeather.windSpeed} {this.props.windUnit}</span></p>
          </div>
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
