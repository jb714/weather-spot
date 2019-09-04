import React, { Component } from 'react';

import MyWeatherContainer from './MyWeather/MyWeatherContainer';
import TheirWeather from './TheirWeather/TheirWeather';
import Forecasts from './Forecasts/Forecasts';
import SaveWeather from './SavedSearches/SaveWeather';

class BodySection extends Component {

  render() {
    return (
      <div>
        <div className="body-section">
            <MyWeatherContainer
              scale={this.props.scale}
              tempUnit={this.props.tempUnit}
              windUnit={this.props.windUnit}/>
            {this.props.searchTerm ?
              <TheirWeather
                searchedWeather={this.props.searchedWeather}
                scale={this.props.scale}
                tempUnit={this.props.tempUnit}
                windUnit={this.props.windUnit}/>
              : ''}
            {this.props.searchTerm ?
              <Forecasts
                forecasts={this.props.forecasts}
                scale={this.props.scale}
                tempUnit={this.props.tempUnit}
                windUnit={this.props.windUnit}
                searchedWeather={this.props.searchedWeather}/>
              : ''}
        </div>
        <SaveWeather
          saved={this.props.saved}
          saveWeather={this.props.saveWeather}
          searchedWeather={this.props.searchedWeather}
          searchTerm={this.props.searchTerm}/>
      </div>
    );
  }
}

export default BodySection;
