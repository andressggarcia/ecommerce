import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CardSidebar from './CardSidebar';

const NavBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                  <Nav.Link onClick={handleShow} >cart</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <CardSidebar show={show} handleClose={handleClose} />
        </div>
    );
};

export default NavBar;