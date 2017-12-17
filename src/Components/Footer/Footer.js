import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class Footer extends Component {


  render() {

    return (
      <Row id="Footer">
        <Col xs={6} className="align-left">
          <h5 id="attribution">Built by Justin Bell. All icons designed by MadeByOliver from Flaticon.</h5>
        </Col>
        <Col xs={6} className="align-right">
          <h5 id="githubLink">The Weather Spot was made with ReactJS. <a href="https://github.com/jb714/weather-spot">Click to see the code</a></h5>
        </Col>
      </Row>
    );
  }
}

export default Footer;
