import React, { Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class MusicTheory extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Jumbotron fluid className='temp-header'>
          <Container>
            <h1>Music Theory</h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default MusicTheory;
