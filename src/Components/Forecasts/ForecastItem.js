import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {


  render() {
    const item = this.props.item;
    const tempUnit = this.props.tempUnit;

    return (
      <div className="rowItem">
        <span>Avg. Temp: {item.temp.day} {tempUnit}, </span>
        <span>Humidity: {item.humidity}, </span>
        <span>Forecast: {item.weather[0].main}</span>
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
