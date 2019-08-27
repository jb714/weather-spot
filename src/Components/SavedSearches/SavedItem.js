import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SavedItem extends Component {
  deleteWeather(id){
    this.props.deleteSnapshot(id);
  }

  render() {
    const item = this.props.item;

    return (

      <div className="SavedSearches">
        <p>It's 73 &#8457; and {item.description} in {item.location} <button onClick={this.deleteWeather.bind(this, this.props.item.id)}>X</button></p>
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
