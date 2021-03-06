import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


class SaveWeather extends Component {

  saveWeather = () => {
    this.props.saveWeather(this.props.searchedWeather);
  }

  render() {
      const {
        saved
      } = this.props;

      return(
      <div className="save-section">
        {this.props.searchTerm && saved.length < 3 ? <Button type="submit" onClick={this.saveWeather} value="Save">Save snapshot</Button> : ''}
      </div>
    );
  }
}

SaveWeather.propTypes = {
  searchedWeather: PropTypes.object,
  saveWeather: PropTypes.func
}

export default SaveWeather;
