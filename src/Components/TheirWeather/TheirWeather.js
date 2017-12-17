import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';


class TheirWeather extends Component {


  render() {

    const searchedWeather = this.props.searchedWeather;

    return (
      <Row id="TheirWeather" className="weatherBlock">
        <Col xs={12} id="TheirWeatherInner">
          <div className="cardHead">
            <h2> Over there, in {searchedWeather.location}</h2>
          </div>
          <h3>Temperature right now : {searchedWeather.currentTemp} {this.props.tempUnit}</h3>
          <h3> Humidity: {searchedWeather.humidity} </h3>
          <h3> Current weather conditions: {searchedWeather.conditions}</h3>
          <h3>Wind speed: {searchedWeather.windSpeed} {this.props.windUnit}</h3>
        </Col>
      </Row>
    );
  }
}

TheirWeather.propTypes = {
  searchedWeather: PropTypes.object,
  scale: PropTypes.string,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
}

export default TheirWeather;
