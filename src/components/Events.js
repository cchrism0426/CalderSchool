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
        <Jumbotron fluid className='temp-header'>
          <Container>
            <h1>Events</h1>
          </Container>
        </Jumbotron>
        <Row>
          <Media>
            <img
              width={256}
              height={144}
              className="mr-3"
              src="http://via.placeholder.com/256x144"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3>Event Name</h3>
              <p><i>September 20, 2009</i></p>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <img
              width={256}
              height={144}
              className="mr-3"
              src="http://via.placeholder.com/256x144"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3>Event Name</h3>
              <p><i>September 20, 2009</i></p>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <img
              width={256}
              height={144}
              className="mr-3"
              src="http://via.placeholder.com/256x144"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3>Event Name</h3>
              <p><i>September 20, 2009</i></p>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <img
              width={256}
              height={144}
              className="mr-3"
              src="http://via.placeholder.com/256x144"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3>Event Name</h3>
              <p><i>September 20, 2009</i></p>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
          <Media>
            <img
              width={256}
              height={144}
              className="mr-3"
              src="http://via.placeholder.com/256x144"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h3>Event Name</h3>
              <p><i>September 20, 2009</i></p>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Row>
      </div>
    );
  }
}

export default Events;
