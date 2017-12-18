import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, FormControl, Button, Modal } from 'react-bootstrap';
import hamburgerIcon from "../../assets/ic_menu_white_24px.svg"

import SavedItem from "./SavedItem";


class SavedSearches extends Component {

  constructor(){
    super();
    this.state = {
      showModal: false
    }

    this.tempUnit = <span>&#8457;</span>
    this.windUnit = "mph";
    this.deleteWeather = this.deleteWeather.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {

    this.setState({ showModal: true }, console.log("After", this.state.showModal));

  }

  closeModal() {
    this.setState({ showModal: false });
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

              <img src={hamburgerIcon} className="hamburgerIcon" onClick={this.openModal} />


              <Modal show={this.state.showModal} onHide={this.closeModal}>
                <Modal.Header closeButton>
                <Modal.Title>Saved Snapshots</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{saved}</p>
                </Modal.Body>
              </Modal>

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
