import React, { Component } from 'react';
import { Carousel as MultiCarousel } from 'react-multi-carousel';
import { Container, Row, Col, Image, Carousel, Navbar, Nav, Card, Button, Form } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends Component {
	constructor() {
		super();
	}

	render() {
		const responsive = {
		  desktop: {
		    breakpoint: { max: 3000, min: 1024 },
		    items: 3,
		    slidesToSlide: 3, // optional, default to 1.
		  },
		  tablet: {
		    breakpoint: { max: 1024, min: 464 },
		    items: 2,
		    slidesToSlide: 2, // optional, default to 1.
		  },
		  mobile: {
		    breakpoint: { max: 464, min: 0 },
		    items: 1,
		    slidesToSlide: 1, // optional, default to 1.
		  },
		};
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
						<h1>Performance Highlights</h1>
					</Row>
					<Row className='performance-block'>
						{/*<MultiCarousel
						  swipeable={false}
						  draggable={false}
						  showDots={true}
						  responsive={responsive}
						  ssr={true} // means to render carousel on server-side.
						  infinite={true}
						  autoPlay={this.props.deviceType !== "mobile" ? true : false}
						  autoPlaySpeed={1000}
						  keyBoardControl={true}
						  customTransition="all .5"
						  transitionDuration={500}
						  containerClass="carousel-container"
						  removeArrowOnDeviceType={["tablet", "mobile"]}
						  deviceType={this.props.deviceType}
						  dotListClass="custom-dot-list-style"
						  itemClass="carousel-item-padding-40-px"
						>
						  <div>Item 1</div>
						  <div>Item 2</div>
						  <div>Item 3</div>
						  <div>Item 4</div>
						</MultiCarousel>*/}
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/256x144" />
							  <Card.Body>
							    <Card.Text>
							      Person Date Place
							    </Card.Text>
							  </Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/256x144" />
							  <Card.Body>
							    <Card.Text>
							      Person Date Place
							    </Card.Text>
							  </Card.Body>
							</Card>
						</Col>
						<Col>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src="http://via.placeholder.com/256x144" />
							  <Card.Body>
							    <Card.Text>
							      Person Date Place
							    </Card.Text>
							  </Card.Body>
							</Card>
						</Col>
					</Row>
					<Row>
						<Button variant='link' href='#'>See all performances</Button>
					</Row>
					<hr />
					<Row className='teacher-block'>
						<Col className='teacher-photo'>
							<Image src="http://via.placeholder.com/400x400" roundedCircle fluid='true' />
						</Col>
						<Col className='teacher-description'>
							<h1>Ludwig Calder</h1>
							<p>He has a lot of qualifications and achievements.</p>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col className='section-details'>
							<h1>PIANO</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<Button variant="light" href="piano">See more</Button>
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
							<Button variant="light" href="voice">See more</Button>
						</Col>
					</Row>
					<hr />
					<Row>
						<Col className='section-details'>
							<h1>MUSIC THEORY</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
							<Button variant="light" href="musictheory">See more</Button>
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
							<Button variant="light" href="musiccomp">See more</Button>
						</Col>
					</Row>
					<hr />
					<Row className='testimonials-title'>
						<h1>Testimonials</h1>
					</Row>
					<Row className='testimonials-block'>
						<Col>
							<blockquote>
								Mr. Calder is awesome
								<cite>a parent</cite>
							</blockquote>
						</Col>
						<Col>
							<blockquote>
								Mr. Calder is awesome
								<cite>a parent</cite>
							</blockquote>
						</Col>
					</Row>
					<hr />
					<Row className='title-block'>
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
					</Row>
					<Row>
						<Button variant='link' href='events'>See all events</Button>
					</Row>
					<hr />
					<Row className='title-block'>
						<h1>Contact Us</h1>
					</Row>
					<Row className='contact-block'>
						<Col>
							<h5>Address: </h5>
							<h5>Phone: </h5>
						</Col>
						<Col>
							<Form>
							    <Form.Group controlId="exampleForm.ControlInput1">
							    	<Form.Label>Email address</Form.Label>
							    	<Form.Control type="email" placeholder="name@email.com" />
							    </Form.Group>
							    <Form.Group controlId="exampleForm.ControlTextarea1">
							    	<Form.Label>Email body</Form.Label>
							    	<Form.Control as="textarea" rows="3" />
							    </Form.Group>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default HomePage;
