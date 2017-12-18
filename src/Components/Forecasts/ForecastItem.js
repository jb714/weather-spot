import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ForecastItem extends Component {


  render() {
    const item = this.props.item;
    const tempUnit = this.props.tempUnit;

    return (
      <div>
        <p>Avg. Temp: <span className="altColor">{item.temp.day} {tempUnit}</span>, </p>
        <p>Humidity: <span className="altColor">{item.humidity}</span>, </p>
        <p>Forecast: <span className="altColor">{item.weather[0].main}</span></p>
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
