import React, { Component } from 'react';


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
      <div id="SearchBar">
        <h1>The Weather Spot</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" id="search" placeholder="Enter a city" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" id="submit" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
