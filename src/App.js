import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

import SearchBar from './Components/SearchBar';
import MyWeather from './Components/MyWeather';
import TheirWeather from './Components/TheirWeather';
import SavedSearches from './Components/TheirWeather';

class App extends Component {

  constructor(){
    super();

    this.state = {
      API_KEY: 'c48579c123cab4d7e33f94e32b70aa4a',
      searchTerm: '',
      searchedWeather: {},
      tempUnit: "Fahrenheit"
    }
    this.getWeather = this.getWeather.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getWeather(){

    $.ajax({
      /*========Ternary conditional statements determining which type of temperature unit will be used===========*/
      url: (this.state.tempUnit === "Fahrenheit") ?
      "http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchTerm+ "&units=imperial&appid="+ this.state.API_KEY :
      (this.state.tempUnit === "Metric") ?
      "http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchTerm+ "&units=metric&appid="+ this.state.API_KEY
      : "http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchTerm+ "&units=default&appid="+ this.state.API_KEY,

      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          searchedWeather: {
            location: data.name,
            currentTemp: data.main.temp,
            lowTemp: data.main.temp_min,
            highTemp: data.main.temp_max,
            humidity: data.main.humidity,
            conditions: data.weather[0].main,
            windSpeed: data.wind.speed
          }
        })

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }



  render() {
    return (
      <div className="App">
        <SearchBar />
        <MyWeather API_KEY={this.state.API_KEY} tempUnit={this.state.tempUnit}/>
        <hr />
        <TheirWeather searchedWeather={this.state.searchedWeather}/>
        <input type="submit" onClick={this.getWeather} />
      </div>
    );
  }
}

export default App;
