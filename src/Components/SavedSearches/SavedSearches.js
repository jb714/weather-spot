import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

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
      <Row id="SavedSearches">
        <Col xs={12}>

          <Row>

            <Col xsHidden>
            <h4>Saved Snapshots</h4>
            <span>{saved}</span>
            </Col>

            <Col smHidden mdHidden lgHidden>
            <h4><a>Modal coming soon</a></h4>

            </Col>

          </Row>

        </Col>

      </Row>
    );
  }
}

SavedSearches.propTypes = {
  saved: PropTypes.array,
  tempUnit: PropTypes.object,
  windUnit: PropTypes.string,
  onDelete: PropTypes.func
}

export default SavedSearches;
