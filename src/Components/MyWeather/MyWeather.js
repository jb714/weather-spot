import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyWeather extends Component {

  render() {
    const localWeather = this.props.localWeather;

    return (

      <div id="MyWeather">
        <div>
          <div className="weatherBlock">
            <p className="cardHead"> Here, in <span className="altColor">{localWeather.location}</span></p>
            <p> Temperature right now : <span className="altColor"> {localWeather.currentTemp} {this.props.tempUnit}</span></p>
            <p> Humidity: <span className="altColor">{localWeather.humidity}</span> </p>
            <p> Current weather conditions: <span className="altColor">{localWeather.conditions}</span></p>
            <p>Wind speed: <span className="altColor">{localWeather.windSpeed} {this.props.windUnit}</span></p>
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
