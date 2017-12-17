import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


class SaveWeather extends Component {

  constructor(props){
    super(props);
    this.saveWeather = this.saveWeather.bind(this);
  }

  saveWeather(){
    this.props.saveWeather(this.props.searchedWeather);
  }

  render() {
      return(
      <div id="SaveWeather">
        <div id="SaveWeather">
          <Button bsStyle="primary" type="submit" onClick={this.saveWeather} value="Save">Save snapshot</Button>
        </div>
      </div>
    );
  }
}

SaveWeather.propTypes = {
  searchedWeather: PropTypes.object,
  saveWeather: PropTypes.func
}

export default SaveWeather;
