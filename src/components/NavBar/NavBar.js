import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './NavBar.scss';

const NavBar = () => {
  return (
    <Navbar fixed="top">
      <Navbar.Brand as={Link} to="/">
        <span className="NavBar-title">The Hub</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/features">
            Features
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <Button variant="primary" className="NavBar-btn">
          Log In
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
