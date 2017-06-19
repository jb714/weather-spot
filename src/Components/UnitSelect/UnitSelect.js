import React, { Component } from 'react';
import PropTypes from 'prop-types';


class UnitSelect extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: "Fahrenheit"
    }
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    const scale = e.target.value;
    let tempUnit = <span>&#8457;</span>;
    let windUnit = "meters/second";

    if(scale === "Fahrenheit"){
      tempUnit= <span>&#8457;</span>;
      windUnit= "mph";

    } else if (scale === "Metric"){
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
      <div id="UnitSelect" >
        <div className="wrapper" id="UnitSelectWrapper">
            <label>
            Temperature Unit: &ensp;
            </label>
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="Fahrenheit" >Fahrenheit (&#8457;)</option>
            <option value="Metric" >Metric (&deg;C)</option>
            <option value="Kelvin">Kelvin (K)</option>
            </select>
          </div>
      </div>
    );
  }
}

UnitSelect.propTypes = {
  scale: PropTypes.string,
  setScale: PropTypes.func
}

export default UnitSelect;
