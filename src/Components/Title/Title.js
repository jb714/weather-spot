import React, { Component } from 'react';
import PropTypes from 'prop-types';

import storm from "../../assets/Weather-icons/storm-2.png"
import sun from "../../assets/Weather-icons/sunny.png"


class Title extends Component {

  render() {
    return (
      <div className="title-and-icons">
          <img src={storm} alt="storm icon" className="icon"/>
          <div className="app-title">The Weather Spot</div>
          <img src={sun} alt="sun icon" className="icon"/>
      </div>
    );
  }
}

Title.propTypes = {
  setCity: PropTypes.func
}

export default Title;
