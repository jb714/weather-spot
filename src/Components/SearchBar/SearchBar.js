import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

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
    <div className="searchbar">
        <div>
          <div className="Header">
              <img src={storm} alt="storm icon" className="icon"/>
              <div className="PageHeader">The Weather Spot</div>
              <img src={sun} alt="sun icon" className="icon"/>
          </div>

          <div className="SearchForm" >
            <div>
              <Form inline onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormControl placeholder="Enter a city" value={this.state.value} onChange={this.handleChange} />
                  </FormGroup>
                  <Button type="submit" className="submit" bsStyle="primary">Get Weather</Button>
              </Form>
            </div>
          </div>

        </div>
      </div>



    );
  }
}

SearchBar.propTypes = {
  setCity: PropTypes.func
}

export default SearchBar;
