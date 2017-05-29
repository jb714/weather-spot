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

  componentWillReceiveProps(nextProps){
    if(nextProps.scale !== this.props.scale){
      this.getMyWeather();
    }
  }


  getMyWeather(){

    window.navigator.geolocation.getCurrentPosition(position => {
      var newLat = position.coords.latitude;
      var newLon = position.coords.longitude;


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
        console.log(err);
      }
    });
    })
  }

  render() {
    const localWeather = this.state.localWeather;

    return (

      <div className="weatherBox" id="MyWeather">
        <h2> Here, in {localWeather.location}</h2>
        <p class="rowItem"> Temperature right now : {localWeather.currentTemp}</p> <div class="rowItem">{this.props.tempUnit}</div>
        <h3> Humidity: {localWeather.humidity} </h3>
        <h3> Current weather conditions: {localWeather.conditions}</h3>
        <h3>Wind speed: {localWeather.windSpeed}</h3>   {this.props.windUnit}
      </div>
    );
  }
}

export default MyWeather;
