import React, { Component } from 'react';


class SavedItem extends Component {
  deleteWeather(id){
    this.props.onDelete(id);
  }

  render() {
    const item = this.props.item;

    return (

      <div className="SavedSearches">
        <p>Right now, {item.location} is experiencing {item.description} <a href="#" onClick={this.deleteWeather.bind(this, this.props.item.id)}>X</a></p>
      </div>
    );
  }
}

export default SavedItem;
