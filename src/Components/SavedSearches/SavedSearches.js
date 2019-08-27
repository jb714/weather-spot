import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
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
        return <div key={item.id}>
        <SavedItem
          item={item}
          tempUnit={this.props.tempUnit}
          windUnit={this.props.windUnit}
          deleteSnapshot={this.props.deleteSnapshot}/>
        </div>
      })
    return (
      <div className="saved-searcheds">
        <div>
          <div className="d-none d-sm-block">
          <h4>Saved Snapshots</h4>
          <span>{saved}</span>
          </div>
          <div className="d-xs-block d-sm-none">
            <img src={hamburgerIcon} className="hamburgerIcon" onClick={this.openModal} alt="Hamburger icon"/>
            <Modal show={this.state.showModal} onHide={this.closeModal}>
              <Modal.Header closeButton>
              <Modal.Title>Saved Snapshots</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{saved}</p>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
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
