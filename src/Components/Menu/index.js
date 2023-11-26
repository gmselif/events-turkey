import React from 'react'
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Menu() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top" style={{maxHeight: "10vh"}}>
      <Container>
        <Navbar.Brand>
          <Link to="/" 
            className="text-danger" 
            style={{ textDecoration: "none", fontSize:"36px" }}
          >
            Events Turkey
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/AboutUs" className="nav-link text-light">
              About Us
            </Link>
            <Link to="/ContactUs" className="nav-link text-light">
              Contact Us
            </Link>
            <Link to="/PastEvents" className="nav-link text-light">
              Past Events
            </Link>
            <Link to="/PastEvents" className="nav-link text-light">
              Past Events
            </Link>
          </Nav>
          <Nav>
            <Link to="/Login" className="nav-link text-light">
              <Button variant="danger">
                Sign In
              </Button>
            </Link>
            <Link to="/Signup" className="nav-link text-light">
              <Button variant="danger">
                Sign Up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu