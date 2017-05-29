import React, { Component } from 'react';
import TheirWeather from "./TheirWeather"


class SavedItem extends Component {


  render() {
    const item = this.props.item;

    return (

      <div className="SavedSearches">
        <p>Right now, {item.location} is experiencing {item.description}</p>
        <hr />
      </div>
    );
  }
}

export default SavedItem;
