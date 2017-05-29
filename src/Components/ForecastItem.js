import React, { Component } from 'react';


class ForecastItem extends Component {


  render() {
    const item = this.props.item;
    const tempUnit = this.props.tempUnit;
    const windUnit = this.props.windUnit;
    console.log(item);


    return (
      <div>
        <p>Avg. Temp: {item.temp.day}</p>{tempUnit}
        <p>Humidity:{item.humidity}</p>
        <p>Forecast:{item.weather[0].main}</p>
        <hr />
      </div>
    );
  }
}

export default ForecastItem;
