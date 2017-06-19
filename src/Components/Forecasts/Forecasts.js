import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <h2 className="cardHead">7 day forecast in {this.props.searchedWeather.location}:</h2>
        <div id="ForecastsWrapper">
        {forecasts}
        </div>
      </div>
    );
  }
}

Forecasts.propTypes = {
  searchedWeather: PropTypes.object,
  forecasts: PropTypes.object,
  scale: PropTypes.string,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string
}

export default Forecasts;
