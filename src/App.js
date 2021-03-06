import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import uuid from 'uuid';


import HeadSection from './Components/HeadSection';
import BodySection from './Components/BodySection';
import Footer from './Components/Footer/Footer';

class App extends Component {

  constructor(){
    super();
    this.state = {
      searchTerm: '',
      searchedWeather: {},
      saved: [],
      forecasts: {},
      scale: "imperial",
      tempUnit: <span>&#8457;</span>,
      windUnit: "mph",
    }
  }

  //Set the temperature scale and the units that will be used throughout the application
  setScale = (scale, tempUnit, windUnit) => {
    this.setState({scale: scale, tempUnit: tempUnit, windUnit: windUnit}, this.getWeather);
  }

  setCity = (city) => {
    //Set the city that will be used in dynamic searching, and set getWeather as a callback after the state sets
    this.setState({searchTerm: city},this.getWeather);
  }

  saveWeather = (weather) => {
    let saved = this.state.saved;
    saved.push(weather);
    this.setState({saved: saved});
  }

  deleteSnapshot = (id) => {
    let saved = this.state.saved;
    let index = saved.findIndex(x => x.id === id);
    saved.splice(index, 1);
    this.setState({saved: saved});
  }


  getWeather = () => {
    const {
      scale
    } = this.state;
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.searchTerm+ '&units='+this.state.scale+'&appid='+API_KEY,

      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          searchedWeather: {
            id: uuid.v4(),
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
      url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+this.state.searchTerm+ '&units='+this.state.scale+'&appid='+API_KEY,
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
        <HeadSection
          {...this.state}
          deleteSnapshot={this.deleteSnapshot}
          setCity={this.setCity}
          setScale={this.setScale}
          />
        <BodySection
          {...this.state}
          saveWeather={this.saveWeather}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
