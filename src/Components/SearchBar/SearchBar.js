import React, { Component } from 'react';
import './SearchBar.css'


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
          <h1>The Weather Spot</h1>
          <form onSubmit={this.handleSubmit}>
          <input type="text" className="search" placeholder="Enter a city" value={this.state.value} onChange={this.handleChange}/>
          <button type="submit" className="submit">Get Weather</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
