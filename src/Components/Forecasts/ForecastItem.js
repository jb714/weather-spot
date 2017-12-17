import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {


  render() {
    const item = this.props.item;
    const tempUnit = this.props.tempUnit;

    return (
      <div>
        <span>Avg. Temp: <span className="altColor">{item.temp.day} {tempUnit}</span>, </span>
        <span>Humidity: <span className="altColor">{item.humidity}</span>, </span>
        <span>Forecast: <span className="altColor">{item.weather[0].main}</span></span>
        <hr />
      </div>
    );
  }
}

ForecastItem.propTypes = {
  item: PropTypes.object,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
}

export default ForecastItem;
