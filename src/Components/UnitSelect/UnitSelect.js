import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormControl, FormGroup } from 'react-bootstrap';


class UnitSelect extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: "imperial"
    }
  }

  handleChange = (e) => {
    const scale = e.target.value;
    let tempUnit = <span>&#8457;</span>;
    let windUnit = "meters/second";

    if(scale === "imperial"){
      tempUnit= <span>&#8457;</span>;
      windUnit= "mph";

    } else if (scale === "metric"){
      tempUnit= <span>&deg;C</span>;
      windUnit: "meters/second";
    } else {
      tempUnit= <span>K</span>;
      windUnit= "meters/second";
    }
    this.setState({value: scale})

    this.props.setScale(scale,tempUnit,windUnit)

  }

  render() {

    return (
      <div>
        <h4>Temp Units</h4>
        <FormGroup>
          <FormControl componentClass="select" value={this.state.value} onChange={this.handleChange}>
          <option value="imperial" >Imperial (&#8457;)</option>
          <option value="metric" >Metric (&deg;C)</option>
          <option value="kelvin">Kelvin (K)</option>
          </FormControl>
        </FormGroup>
      </div>
    );
  }
}

UnitSelect.propTypes = {
  scale: PropTypes.string,
  setScale: PropTypes.func
}

export default UnitSelect;
