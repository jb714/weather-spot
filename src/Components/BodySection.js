import React, { Component } from 'react';

import MyWeatherContainer from './MyWeather/MyWeatherContainer';
import TheirWeather from './TheirWeather/TheirWeather';
import Forecasts from './Forecasts/Forecasts';
import SaveWeather from './SavedSearches/SaveWeather';

class BodySection extends Component {

  render() {
    const props = this.props;
    return (
      <div>
        <div className="body-section">
            <MyWeatherContainer {...props} />
            {props.searchTerm ? <TheirWeather {...props}/> : ''}
            {props.searchTerm ? <Forecasts {...props}/> : ''}
        </div>
        <SaveWeather {...props}/>
      </div>
    );
  }
}

export default BodySection;
