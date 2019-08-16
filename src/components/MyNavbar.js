import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class MyNavbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Navbar bg='dark' variant='dark' expand='lg' fixed='top'>
        <Navbar.Brand href="/">Calder School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link href='/piano'>PIANO</Nav.Link>
            <Nav.Link href='/voice'>VOICE</Nav.Link>
            <Nav.Link href='/musictheory'>MUSIC THEORY</Nav.Link>
            <Nav.Link href='/musiccomp'>MUSIC COMPOSITION</Nav.Link>
            <Nav.Link href='/events'>EVENTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
