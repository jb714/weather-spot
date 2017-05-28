import React, { Component } from 'react';


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
    let tempUnit = <h3>&#8457;</h3>;
    let windUnit = "meters/second";

    if(scale === "Fahrenheit"){
      tempUnit= <h3>&#8457;</h3>;
      windUnit= "mph";

    } else if (scale === "Metric"){
      tempUnit= <h3>&deg;C</h3>;
      windUnit: "meters/second";
    } else {
      tempUnit= <h3>K</h3>;
      windUnit= "meters/second";
    }
    this.setState({value: scale})
    this.props.setScale(scale,tempUnit,windUnit)

  }

  render() {
    return (
      <div id="UnitSelect">
        <label>
        Temperature Unit: &ensp;
        </label>
          <select value={this.state.value} onChange={this.handleChange}>
          <option value="Fahrenheit" >Fahrenheit (&#8457;)</option>
          <option value="Metric" >Metric (&deg;C)</option>
          <option value="Kelvin">Kelvin (K)</option>
          </select>
      </div>
    );
  }
}

export default UnitSelect;
