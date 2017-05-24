import React, { Component } from 'react';
import $ from 'jquery';


class MyWeather extends Component {

  constructor(){
    super();

    this.state = {
      localWeather: {}
    }
    this.getMyWeather = this.getMyWeather.bind(this);
  }

  componentDidMount(){
    this.getMyWeather();
  }

  getMyWeather(){

    window.navigator.geolocation.getCurrentPosition(position => {

        console.log(this.state.localWeather)
        
      var newLat = position.coords.latitude;
      var newLon = position.coords.longitude;


    $.ajax({
      /*========Ternary conditional statements determining which type of temperature unit will be used===========*/
      url: (this.props.tempUnit === "Fahrenheit") ?
      "http://api.openweathermap.org/data/2.5/weather?lat="+newLat+"&lon="+newLon+"&units=imperial&appid=" + this.props.API_KEY:
      (this.props.tempUnit === "Metric") ?
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
        console.log(err);
      }
    });

    })
  }

  render() {
    return (
      <div className="MyWeather">
        <h2> Here, in {this.state.localWeather.location}</h2>
        <h3> Temperature right now (in &#8457;): {this.state.localWeather.currentTemp} &#176;</h3>
        <h3> Humidity: {this.state.localWeather.humidity} </h3>
        <h3> Current weather conditions: {this.state.localWeather.conditions}</h3>
        <h3> Wind speed: {this.state.localWeather.windSpeed}mph</h3>
      </div>
    );
  }
}

export default MyWeather;
