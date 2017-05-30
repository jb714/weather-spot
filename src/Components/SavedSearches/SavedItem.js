import React, { Component } from 'react';


class SavedItem extends Component {


  render() {
    const item = this.props.item;

    return (

      <div className="SavedSearches">
        <p>Right now, {item.location} is experiencing {item.description}</p>
      </div>
    );
  }
}

export default SavedItem;
