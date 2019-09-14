import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state={
      value: ''
    };
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const city = this.state.value;
    this.props.setCity(city);
  }

  handleChange = (e) => {
    const city = e.target.value;
    this.setState({value: city});
  }


  render() {
    return (
      <div className="searchbar">
        <div>
          <Form inline onSubmit={this.handleSubmit}>
              <FormGroup>
                <FormControl placeholder="Enter a city" value={this.state.value} onChange={this.handleChange} />
              </FormGroup>
              <Button type="submit" className="submit" bsStyle="primary">Get Weather</Button>
          </Form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  setCity: PropTypes.func
}

export default SearchBar;
