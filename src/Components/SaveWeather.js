import React, { Component } from 'react';


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
      <input type="submit" onClick={this.saveWeather} value="Save"/>
      </div>
    );
  }
}

export default SaveWeather;
