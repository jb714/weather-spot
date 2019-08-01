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
          <div  className="weatherBlock" id="ForecastsBlock">
            <p className="cardHead">7 day forecast in <span className="altColor">{this.props.searchedWeather.location}:</span></p>
              <div>
              {forecasts}
              </div>
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
