import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SaveWeather extends Component {

  constructor(props){
    super(props);
    this.saveWeather = this.saveWeather.bind(this);
  }

  saveWeather(){
    this.props.saveWeather(this.props.searchedWeather);
  }

  render() {
      return(
      <div id="SaveWeather">
        <div id="SaveWeather">
          <input type="submit" onClick={this.saveWeather} value="Save"/>
        </div>
      </div>
    );
  }
}

SaveWeather.propTypes = {
  searchedWeather: PropTypes.object,
  saveWeather: PropTypes.func
}

export default SaveWeather;
