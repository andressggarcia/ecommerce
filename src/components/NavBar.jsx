import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-bar'>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand className='nav-bar__home' as={Link} to="/">Ecommerce</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/login" >login</Nav.Link>
                  <Nav.Link as={Link} to="/purchases" >purchases</Nav.Link>
                  <Nav.Link >cart</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default NavBar;