import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

class MyWeather extends Component {

  render() {
    const localWeather = this.props.localWeather;

    return (

      <Row id="MyWeather" className="weatherBlock">
        <Col xs={12} id="MyWeatherWrapper">
        <p className="cardHead"> Here, in <span className="altColor">{localWeather.location}</span></p>
        <p> Temperature right now : <span className="altColor"> {localWeather.currentTemp} {this.props.tempUnit}</span></p>
        <p> Humidity: <span className="altColor">{localWeather.humidity}</span> </p>
        <p> Current weather conditions: <span className="altColor">{localWeather.conditions}</span></p>
        <p>Wind speed: <span className="altColor">{localWeather.windSpeed} {this.props.windUnit}</span></p>
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
