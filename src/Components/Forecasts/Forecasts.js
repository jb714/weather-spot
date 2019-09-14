import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ForecastItem from "./ForecastItem";

class Forecasts extends Component {

  render() {
    let forecasts;
    const props = this.props;
    if(props.forecasts.list){
        forecasts = props.forecasts.list.map(item =>{
          return <div key={item.dt}>
          <ForecastItem item={item} {...props}/>
          </div>
        })
    }

    return (
      <div id="Forecasts">
          <div  className="weather-block" id="ForecastsBlock">
            <p className="cardHead">7 day forecast in <span className="purple-text">{props.searchedWeather.location}:</span></p>
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
