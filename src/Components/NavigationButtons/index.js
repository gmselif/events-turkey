import React from 'react'
import { Link } from "react-router-dom";

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function NavigationButtons() {
  return (
    <Container fluid className="bg-dark">
      <Container className="p-3">
        <Row className="justify-content-center">
          <Col xs={6} md={3} className="mb-3 mb-md-0">
            <Link to="/Concerts">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Concerts
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Theaters">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Theaters
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Festivals">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Festivals
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3} className="text-lg-center">
            <Link to="/Standups">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Standups
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default NavigationButtons