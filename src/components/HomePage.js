import React, { Component } from 'react';
import { Container, Row, Col, Image, Carousel, Navbar, Nav, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<Container className='root'>
					<Row className='carousel-block'>
						<Col>
							<Carousel>
								<Carousel.Item>
									<Image src="http://via.placeholder.com/1980x1080" fluid='true' />
									<Carousel.Caption>
										<h3>habitant morbi tristique</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src="http://via.placeholder.com/1980x1080" fluid='true' />
									<Carousel.Caption>
										<h3>habitant morbi tristique</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Image src="http://via.placeholder.com/1980x1080" fluid='true' />
									<Carousel.Caption>
										<h3>habitant morbi tristique</h3>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col className='section-details'>
							<h1>PIANO</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</Col>
						<Col className='section-photo'>
							<Image src="http://via.placeholder.com/600x400" fluid='true' />
						</Col>
					</Row>
					<hr />
					<Row>
						<Col className='section-photo'>
							<Image src="http://via.placeholder.com/600x400" fluid='true' />
						</Col>
						<Col className='section-details'>
							<h1>VOICE</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col className='section-details'>
							<h1>MUSIC THEORY</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</Col>
						<Col className='section-photo'>
							<Image src="http://via.placeholder.com/600x400" fluid='true' />
						</Col>
					</Row>
					<hr />
					<Row>
						<Col className='section-photo'>
							<Image src="http://via.placeholder.com/600x400" fluid='true' />
						</Col>
						<Col className='section-details'>
							<h1>MUSIC COMPOSITION</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
						</Col>
					</Row>
					<hr />
					<Row className='testimonials-title'>
						<h1>Testimonials</h1>
					</Row>
					<Row className='testimonials-block'>
						<Col>
							<h1>Mr. Calder is awesome</h1>
							<p>- a parent</p>
						</Col>
						<Col>
							<h1>Mr. Calder is awesome</h1>
							<p>- a parent</p>
						</Col>
					</Row>
					<hr />
					<Row className='events-title'>
						<h1>Events</h1>
					</Row>
					<Row className='event-block'>
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
							  <Card.Body>
							    <Card.Title>Event</Card.Title>
							    <Card.Text>
							      These are event details.
							    </Card.Text>
							    <Card.Link href="#">Link to the event</Card.Link>
							  </Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
							  <Card.Body>
							    <Card.Title>Event</Card.Title>
							    <Card.Text>
							      These are event details.
							    </Card.Text>
							    <Card.Link href="#">Link to the event</Card.Link>
							  </Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
							  <Card.Body>
							    <Card.Title>Event</Card.Title>
							    <Card.Text>
							      These are event details.
							    </Card.Text>
							    <Card.Link href="#">Link to the event</Card.Link>
							  </Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/286x180" />
							  <Card.Body>
							    <Card.Title>Event</Card.Title>
							    <Card.Text>
							      These are event details.
							    </Card.Text>
							    <Card.Link href="#">Link to the event</Card.Link>
							  </Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Button variant='link' href='Events'>See all events</Button>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HomePage;
