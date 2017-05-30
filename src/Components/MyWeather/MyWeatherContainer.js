import React, { Component } from 'react';
import MyWeather from './MyWeather';
import $ from 'jquery';


class MyWeatherContainer extends Component {

  constructor(){
    super();

    this.state = {
      localWeather: {},
    }
    this.getMyWeather = this.getMyWeather.bind(this);
  }

  componentDidMount(){
    this.getMyWeather();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.scale !== this.props.scale){
      this.getMyWeather();
    }
  }


  getMyWeather(){

    window.navigator.geolocation.getCurrentPosition(position => {
      var newLat = position.coords.latitude;
      var newLon = position.coords.longitude;
      var accuracy =position.coords.accuracy;


    $.ajax({
      /*========Ternary conditional statements determining which type of temperature unit will be used===========*/
      url: (this.props.scale === "Fahrenheit") ?
      "http://api.openweathermap.org/data/2.5/weather?lat="+newLat+"&lon="+newLon+"&units=imperial&appid=" + this.props.API_KEY:
      (this.props.scale === "Metric") ?
      "http://api.openweathermap.org/data/2.5/weather?lat="+newLat+"&lon="+newLon+"&units=metric&appid=" + this.props.API_KEY :
      "http://api.openweathermap.org/data/2.5/weather?lat="+newLat+"&lon="+newLon+"&units=default&appid=" + this.props.API_KEY
      ,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          localWeather: {
            location: data.name,
            currentTemp: data.main.temp,
            humidity: data.main.humidity,
            conditions: data.weather[0].main,
            windSpeed: data.wind.speed
          }
        })
      }.bind(this),
      error: function(xhr, status, err){
        alert("Hey! Looks like your browser is doing a great job of keep you protected from scripts that don't come through HTTPS. Unfortunately, it's keeping the app from working as intended. If you allow permit this script to run, all it will do is get your geolocation. I'll look in to upgrading my account to one with SSL controls :) Click 'Load unsafe scripts' unless of course, you don't want to.")
        console.log("This is the error",err);
      }
    });
    })
  }

  render() {

    return (

      <div>
        <MyWeather localWeather={this.state.localWeather} tempUnit={this.props.tempUnit} windUnit={this.props.windUnit}/>
      </div>
    );
  }
}

export default MyWeatherContainer;
