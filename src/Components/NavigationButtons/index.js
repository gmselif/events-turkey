import React from 'react'
import { Link } from "react-router-dom";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavigationButtons() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={5} md={3} className="pb-3 pb-md-0">
          <Link to="/Concerts">
              <Button variant="warning" size="lg" className="w-100">
                Concerts
              </Button>
          </Link>
        </Col>
        <Col xs={5} md={3}>
          <Link to="/Theaters">
              <Button variant="warning" size="lg" className="w-100">
                Theaters
              </Button>
          </Link>
        </Col>
        <Col xs={5} md={3}>
          <Link to="/Festivals">
              <Button variant="warning" size="lg" className="w-100">
                Festivals
              </Button>
          </Link>
        </Col>
        <Col xs={5} md={3} className="text-lg-center">
          <Link to="/Standups">
              <Button variant="warning" size="lg" className="w-100">
                Standups
              </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default NavigationButtons