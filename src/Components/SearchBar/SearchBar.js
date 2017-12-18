import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Button, Form, PageHeader, FormControl, FormGroup } from 'react-bootstrap';

import storm from "../../assets/Weather-icons/storm-2.png"
import sun from "../../assets/Weather-icons/sunny.png"


class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state={
      value: ''
    };

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }


  handleSubmit(e){
    e.preventDefault();
    const city = this.state.value;
    this.props.setCity(city);
  }

  handleChange(e){
    const city = e.target.value;
    this.setState({value: city});
  }


  render() {

    return (
    <Row id="SearchBar">
        <Col xs={12}>
          <Row className="Header">
            <Col xs={2} className="align-right">
              <img src={storm} alt="storm icon" className="icon"/>
            </Col>
            <Col xs={8}>
              <PageHeader className="PageHeader">The Weather Spot</PageHeader>
            </Col>
            <Col xs={2} className="align-left">
              <img src={sun} alt="sun icon" className="icon"/>
            </Col>
          </Row>

          <Row className="SearchForm" >
            <Col xs={12}>
              <Form inline onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormControl placeholder="Enter a city" value={this.state.value} onChange={this.handleChange} />
                  </FormGroup>
                  <Button type="submit" className="submit" bsStyle="primary">Get Weather</Button>
              </Form>
            </Col>
          </Row>

        </Col>
      </Row>



    );
  }
}

SearchBar.propTypes = {
  setCity: PropTypes.func
}

export default SearchBar;
