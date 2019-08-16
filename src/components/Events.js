import React, { Component } from 'react';
import { Container, Row, Jumbotron, Media } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Events extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Events</h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Events;
