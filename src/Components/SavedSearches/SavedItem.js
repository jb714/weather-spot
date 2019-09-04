import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SavedItem extends Component {

  deleteWeather = (id) => {
    this.props.deleteSnapshot(id);
  }

  render() {
    const {
      item
    } = this.props;

    return (

      <div className="saved-item">
        <p>It's {item.description} in {item.location} <button onClick={this.deleteWeather.bind(this, this.props.item.id)}>x</button></p>
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
