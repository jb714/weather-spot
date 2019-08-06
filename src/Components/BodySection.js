import React, { Component } from 'react';

import MyWeatherContainer from './MyWeather/MyWeatherContainer';
import TheirWeather from './TheirWeather/TheirWeather';
import Forecasts from './Forecasts/Forecasts';

class BodySection extends Component {

//<h3 className="whiteText">Enter a city to get started</h3>
  render() {
    return (
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
    );
  }
}

export default BodySection;
