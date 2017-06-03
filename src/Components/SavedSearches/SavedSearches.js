import React, { Component } from 'react';

import SavedItem from "./SavedItem";


class SavedSearches extends Component {

  constructor(){
    super();
    this.tempUnit = <span>&#8457;</span>
    this.windUnit = "mph";
    this.deleteWeather = this.deleteWeather.bind(this);
  }

  deleteWeather(id){
    this.props.onDelete(id);
  }

  render() {
    const saved = this.props.saved.map(item =>{
      console.log(item.id)
        return <div key={item.id}>
        <SavedItem item={item} tempUnit={this.props.tempUnit} windUnit={this.props.windUnit} onDelete={this.deleteWeather}/>
        </div>
      })
    return (
      <div id="SavedSearches">
      <h3>Saved Snapshots</h3>
        <div id="SavedSearchesInner">
        <span>{saved}</span>
        </div>
      </div>
    );
  }
}

export default SavedSearches;
