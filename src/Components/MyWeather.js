import React, { Component } from 'react';
import $ from 'jquery';


class MyWeather extends Component {

  constructor(){
    super();

    this.state = {
      weatherData: {}
    }
    this.getCoords = this.getCoords.bind(this);
  }


  componentDidMount(){
    this.getCoords()
  }


  getCoords(){
    /*======API KEY Used for Production of Frontend ======*/
    var API_KEY = 'c48579c123cab4d7e33f94e32b70aa4a';

    window.navigator.geolocation.getCurrentPosition(position => {
      var newLat = parseInt(position.coords.latitude, 10);
      var newLon = parseInt(position.coords.longitude, 10);

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?lat="+newLat+"&lon="+newLon+"&units=imperial&appid=" + API_KEY,
      dataType: 'json',
      cache: false,
      success: function(data){
        console.log(data)
        this.setState({weatherData: data})
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
        <h2>Here, in {this.state.weatherData.name}</h2>
        <h3>Temperature (in &#8457;) : &#176;</h3>
        <h3> Humidity: </h3>
        <h3>Current weather conditions: </h3>
        <h3> Wind speed: </h3>
      </div>
    );
  }
}

export default MyWeather;
