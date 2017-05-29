import React, { Component } from 'react';


class ForecastItem extends Component {


  render() {
    const item = this.props.item;
    const tempUnit = this.props.tempUnit;
    console.log(item);


    return (
      <div className="rowItem">
        <h5>Avg. Temp: {item.temp.day} {tempUnit}</h5>
        <h5>Humidity: {item.humidity}</h5>
        <h5>Forecast: {item.weather[0].main}</h5>
        <hr />
      </div>
    );
  }
}

export default ForecastItem;
