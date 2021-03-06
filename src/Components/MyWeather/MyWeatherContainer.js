import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import MyWeather from './MyWeather';
import $ from 'jquery';


class MyWeatherContainer extends Component {

  constructor(){
    super();
    this.state = {
      localWeather: {},
    }
  }

  componentDidMount(){
    this.getMyWeather();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.scale !== this.props.scale){
      this.getMyWeather();
    }
  }


  getMyWeather = () => {

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    window.navigator.geolocation.getCurrentPosition(position => {

      var newLat = position.coords.latitude;
      var newLon = position.coords.longitude;

    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?lat='+newLat+"&lon="+newLon+'&units='+this.props.scale+'&appid='+API_KEY,
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
        alert("Hey! Looks like your browser is doing a great job of keeping you protected from scripts that don't come securely through HTTPS. Unfortunately, it's keeping the app from working as intended. If you permit this script to run, all it will do is get your browser's geolocation. I'll look in to upgrading my Heroku hosting account to one with SSL/HTTPS controls :) On Chrome, click the shield with the red box in the browser/search bar, and hit 'Load unsafe scripts'; unless, of course, you don't want to.")
      }
    });
    })
  }

  render() {

    return (
          <MyWeather localWeather={this.state.localWeather} {...this.props}/>
    );
  }
}

MyWeatherContainer.propTypes = {
  saved: PropTypes.array,
  scale: PropTypes.string,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
}

export default MyWeatherContainer;
