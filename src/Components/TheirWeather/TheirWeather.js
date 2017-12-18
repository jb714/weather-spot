import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';


class TheirWeather extends Component {


  render() {

    const searchedWeather = this.props.searchedWeather;

    return (
      <Row id="TheirWeather">
        <Col xs={12}>
          <div className="weatherBlock">
            <p className="cardHead"> Over there, in <span className="altColor">{searchedWeather.location}</span></p>
            <p>Temperature right now : <span className="altColor">{searchedWeather.currentTemp} {this.props.tempUnit}</span></p>
            <p> Humidity: <span className="altColor">{searchedWeather.humidity}</span> </p>
            <p> Current weather conditions: <span className="altColor">{searchedWeather.conditions}</span></p>
            <p>Wind speed: <span className="altColor">{searchedWeather.windSpeed} {this.props.windUnit}</span></p>
          </div>
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
