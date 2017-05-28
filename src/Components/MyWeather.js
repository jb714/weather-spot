import React, { Component } from 'react';
import $ from 'jquery';


class MyWeather extends Component {

  constructor(){
    super();

    this.state = {
      localWeather: {}
    }
    this.getMyWeather = this.getMyWeather.bind(this);
    this.renderUnits = this.renderUnits.bind(this);
  }

  componentDidMount(){
    this.getMyWeather();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.tempUnit !== this.props.tempUnit){
      this.getMyWeather();
      this.renderUnits();
    }
  }

  renderUnits(){
    let temperature = null;
    let windSpeed = null;
    const localWeather = this.state.localWeather;

    //Conditional rendering block
      if(this.props.tempUnit === "Fahrenheit"){
        temperature = <h3> Temperature right now : {localWeather.currentTemp} &#8457;</h3>
        windSpeed = <h3> Wind speed: {localWeather.windSpeed} mph</h3>
      } else if (this.props.tempUnit === "Metric"){
        temperature = <h3> Temperature right now : {localWeather.currentTemp} &deg;C</h3>
        windSpeed = <h3> Wind speed: {localWeather.windSpeed} meters/second</h3>
      } else {
        temperature = <h3> Temperature right now : {localWeather.currentTemp} K</h3>
        windSpeed = <h3> Wind speed: {localWeather.windSpeed} meters/second</h3>
      }
      return {temperature: temperature, windSpeed: windSpeed}
  }

  getMyWeather(){

    window.navigator.geolocation.getCurrentPosition(position => {
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
    const localWeather = this.state.localWeather;
    const temperature = this.renderUnits().temperature;
    const windSpeed = this.renderUnits().windSpeed;

    return (

      <div className="weatherBox" id="myWeather">
        <h2> Here, in {localWeather.location}</h2>
        {temperature}
        <h3> Humidity: {localWeather.humidity} </h3>
        <h3> Current weather conditions: {localWeather.conditions}</h3>
        {windSpeed}
      </div>
    );
  }
}

export default MyWeather;
