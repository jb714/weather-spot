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
  }

  openModal = () => {

    this.setState({ showModal: true }, console.log("After", this.state.showModal));

  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  deleteWeather = (id) => {
    this.props.onDelete(id);
  }

  render() {
    const props = this.props;
    const saved = props.saved.map(item =>{
        return <div key={item.id}>
        <SavedItem item={item} {...props} />
        </div>
      })
    return (
      <div className="saved-searches">
        <div>
          <div className="d-none d-sm-block">
          <h4>Saved Snapshots</h4>
          <span>{saved}</span>
          </div>
          <div className="d-xs-block d-sm-none">
            <img src={hamburgerIcon} className="icon" onClick={this.openModal} alt="Hamburger icon"/>
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
