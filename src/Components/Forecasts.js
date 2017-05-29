import React, { Component } from 'react';
import TheirWeather from "./TheirWeather";
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
      <div className="SavedSearches">
      <h3>7 day forecast:</h3>
      {forecasts}
      </div>
    );
  }
}

export default Forecasts;
