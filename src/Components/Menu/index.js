import React from 'react'
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container /* fluid="lg"*/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand>
          <Link to="/"
            className="text-warning pe-sm-auto text-decoration-none"
            style={{ fontSize: "36px" }}
          >
            Events Turkey
          </Link>
        </Navbar.Brand>

        <div className="w-40"></div>

        <Navbar.Collapse id="responsive-navbar-nav" className="bg-dark">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-light">
              Events
            </Link>
            <Link to="/AboutUs" className="nav-link text-light">
              About Us
            </Link>
            <Link to="/ContactUs" className="nav-link text-light">
              Contact Us
            </Link>
            <Link to="/PastEvents" className="nav-link text-light">
              Past Events
            </Link>
          </Nav>
          <Nav>
            <Link to="/Signin" className="nav-link text-light">
              <Button variant="warning">
                Sign In
              </Button>
            </Link>
            <Link to="/Signup" className="nav-link text-light">
              <Button variant="warning">
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