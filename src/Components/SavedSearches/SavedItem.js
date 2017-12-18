import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';


class SavedItem extends Component {
  deleteWeather(id){
    this.props.onDelete(id);
  }

  render() {
    const item = this.props.item;

    return (

      <div className="SavedSearches">
        <p>{item.location} is experiencing {item.description} <Button bsStyle="warning" bsSize="xsmall" onClick={this.deleteWeather.bind(this, this.props.item.id)}>X</Button></p>
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
