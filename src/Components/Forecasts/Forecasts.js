import React, { Component } from 'react';
import './Forecasts.css';
import ForecastItem from "./ForecastItem";


class Forecasts extends Component {

  render() {
    let forecasts;
    if(this.props.forecasts.list){
        forecasts = this.props.forecasts.list.map(item =>{
          return <div key={item.dt}>
          <ForecastItem item={item} tempUnit={this.props.tempUnit} windUnit={this.props.windUnit}/>
          </div>
        })
    }

    return (
      <div id="Forecasts">
      <h3>7 day forecast in {this.props.searchedWeather.location}:</h3>
        <div id="ForecastsWrapper">
        {forecasts}
        </div>
      </div>
    );
  }
}

export default Forecasts;
