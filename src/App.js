import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

import UnitSelect from './Components/UnitSelect';
import SearchBar from './Components/SearchBar';
import MyWeather from './Components/MyWeather';
import TheirWeather from './Components/TheirWeather';
import Forecasts from './Components/Forecasts';
import SavedSearches from './Components/SavedSearches';
import SaveWeather from './Components/SaveWeather';

class App extends Component {

  constructor(){
    super();

    this.state = {
      API_KEY: 'c48579c123cab4d7e33f94e32b70aa4a',
      searchTerm: '',
      searchedWeather: {},
      saved: [],
      forecasts: {},
      scale: "Fahrenheit",
      tempUnit: <h3>&#8457;</h3>,
      windUnit: "mph",

    }
    this.getWeather = this.getWeather.bind(this);
    this.setCity = this.setCity.bind(this);
    this.setScale = this.setScale.bind(this);
    this.saveWeather = this.saveWeather.bind(this);
  }

  //Set the temperature scale and the units that will be used throughout the application
  setScale(scale, tempUnit, windUnit){
    this.setState({scale: scale, tempUnit: tempUnit, windUnit: windUnit}, this.getWeather);
  }

  setCity(city){
    //Set the city that will be used in dynamic searching, and set getWeather as a callback after the state sets
    this.setState({searchTerm: city},this.getWeather);
  }

  saveWeather(weather){
    let saved = this.state.saved;
    saved.push(weather);
    this.setState({saved: saved});
  }


  getWeather(){
    $.ajax({
      /*========Ternary conditional statements determining which type of temperature unit will be used===========*/
      url: (this.state.scale === "Fahrenheit") ?
      "http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchTerm+ "&units=imperial&appid="+ this.state.API_KEY :
      (this.state.scale === "Metric") ?
      "http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchTerm+ "&units=metric&appid="+ this.state.API_KEY
      : "http://api.openweathermap.org/data/2.5/weather?q="+this.state.searchTerm+ "&units=default&appid="+ this.state.API_KEY,

      dataType: 'json',
      cache: false,
      success: function(data){
        console.log("get", data.weather[0].description)
        this.setState({
          searchedWeather: {
            location: data.name,
            currentTemp: data.main.temp,
            humidity: data.main.humidity,
            conditions: data.weather[0].main,
            description: data.weather[0].description,
            windSpeed: data.wind.speed
          }
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });

    $.ajax({
      /*========Ternary conditional statements determining which type of temperature unit will be used===========*/
      url: (this.state.scale === "Fahrenheit") ?
      "http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.state.searchTerm+ "&units=imperial&appid="+ this.state.API_KEY :
      (this.state.scale === "Metric") ?
      "http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.state.searchTerm+ "&units=metric&appid="+ this.state.API_KEY
      : "http://api.openweathermap.org/data/2.5/forecast/daily?q="+this.state.searchTerm+ "&units=default&appid="+ this.state.API_KEY,

      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          forecasts: data
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
        <UnitSelect setScale={this.setScale} scale={this.state.scale}/>
        <SearchBar setCity={this.setCity}/>
        <hr />
        <MyWeather API_KEY={this.state.API_KEY} scale={this.state.scale} tempUnit={this.state.tempUnit} windUnit={this.state.windUnit}/>
        <hr />
        {this.state.searchTerm ? <TheirWeather searchedWeather={this.state.searchedWeather} scale={this.state.scale} tempUnit={this.state.tempUnit} windUnit={this.state.windUnit}/> : <h3>Enter a city to get started</h3>}
        {this.state.searchTerm ? <Forecasts forecasts={this.state.forecasts} scale={this.state.scale} tempUnit={this.state.tempUnit} windUnit={this.state.windUnit}/> : ''}
        <SaveWeather saveWeather={this.saveWeather} searchedWeather={this.state.searchedWeather}  />
        <SavedSearches saved={this.state.saved} tempUnit={this.state.tempUnit} windUnit={this.state.windUnit}/>
      </div>
    );
  }
}

export default App;
