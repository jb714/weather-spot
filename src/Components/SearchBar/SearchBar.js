import React, { Component } from 'react';
import PropTypes from 'prop-types';

import storm from "../../assets/Weather-icons/storm-2.png"
import sun from "../../assets/Weather-icons/sunny.png"


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state={
      value: ''
    };

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const city = this.state.value;
    this.props.setCity(city);
  }

  handleChange(e){
    const city = e.target.value;
    this.setState({value: city});
  }


  render() {

    return (
      <div id="SearchBar" >
        <div className="wrapper" id="SearchBarWrapper">
          <div id="Header">
            <img src={storm} alt="storm icon" className="bannerItem" className="icon"/>
            <h1 className="bannerItem">The Weather Spot</h1>
            <img src={sun} alt="sun icon" className="bannerItem" className="icon"/>
          </div>
          <form onSubmit={this.handleSubmit}>
          <input type="text" className="search" placeholder="Enter a city" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" className="submit">Get Weather</button>
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  setCity: PropTypes.func
}

export default SearchBar;
