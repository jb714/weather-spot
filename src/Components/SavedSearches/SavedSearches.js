import React, { Component } from 'react';
import './SavedSearches.css'

import SavedItem from "./SavedItem";


class SavedSearches extends Component {

  constructor(){
    super();
    this.tempUnit = <span>&#8457;</span>
    this.windUnit = "mph";
  }


  render() {
    const saved = this.props.saved.map(item =>{
        return <div key={item.location}>
        <SavedItem item={item} tempUnit={this.props.tempUnit} windUnit={this.props.windUnit}/>
        </div>
      })
    return (
      <div id="SavedSearches">
      <h3>Saved Snapshots</h3>
      {saved}
      </div>
    );
  }
}

export default SavedSearches;
