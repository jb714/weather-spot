import React, { Component } from 'react';


class ForecastItem extends Component {


  render() {
    const item = this.props.item;
    const tempUnit = this.props.tempUnit;
    console.log(item);


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

export default ForecastItem;
