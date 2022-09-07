import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo-black.png'

const Header = () => {
    return (
        <>
      
     
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="sticky-top">
      <Container>
        <Navbar.Brand as={Link}  to="/">
          <img src={logo} style={{height: '30px'}} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="home#services">Services</Nav.Link>
            <Nav.Link  href="home#exparts">Exparts</Nav.Link>
            <Nav.Link href="home#about">About</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} as={Link} to="/Login" >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
    );
};

export default Header;