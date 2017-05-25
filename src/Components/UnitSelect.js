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
    const unit = e.target.value;
    this.setState({value: unit})
    this.props.setTempUnit(unit)

  }

  render() {
    return (
      <div className="UnitSelect">
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
