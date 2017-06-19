import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

SavedItem.propTypes = {
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
  onDelete: PropTypes.func
}

export default SavedItem;
