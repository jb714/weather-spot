import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

class MyWeather extends Component {

  render() {
    const localWeather = this.props.localWeather;

    return (

      <Row id="MyWeather" className="weatherBlock">
        <Col xs={12} id="MyWeatherWrapper">
        <h2 className="cardHead"> Here, in {localWeather.location}</h2>
        <h3> Temperature right now : {localWeather.currentTemp} {this.props.tempUnit}</h3>
        <h3> Humidity: {localWeather.humidity} </h3>
        <h3> Current weather conditions: {localWeather.conditions}</h3>
        <h3>Wind speed: {localWeather.windSpeed} {this.props.windUnit}</h3>
        </Col>
      </Row>
    );
  }
}

MyWeather.propTypes = {
  localWeather: PropTypes.object,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
}

export default MyWeather;
