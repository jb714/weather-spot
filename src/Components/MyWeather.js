import React, { Component } from 'react';


class MyWeather extends Component {

  constructor(){
    super();

    this.state = {
      lat: '',
      lon: ''
    }

    this.getCoords = this.getCoords.bind(this);
  }

  componentWillMount(){
    this.getCoords();
  }
  
  getCoords(){
    window.navigator.geolocation.getCurrentPosition(position => {
      var newLat = parseInt(position.coords.latitude, 10);
      var newLon = parseInt(position.coords.longitude, 10);

      this.setState({
        lat: newLat,
        lon: newLon
      })

    })
  }

  render() {
    return (
      <div className="MyWeather">
        <h2>Here, in</h2>
        <h3>Temperature (in &#8457;) : &#176;</h3>
        <h3> Humidity: </h3>
        <h3>Current weather conditions: </h3>
        <h3> Wind speed: </h3>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lon}</p>
      </div>
    );
  }
}

export default MyWeather;
