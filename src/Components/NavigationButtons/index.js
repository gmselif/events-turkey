import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function NavigationButtons() {
  return (
    <Container fluid className="bg-dark">
      <Container className="p-3">
        <Row className="justify-content-center">
          <Col xs={6} md={3} className="mb-3 mb-md-0">
            <Link to="/concerts">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Concerts
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/theaters">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Theaters
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/festivals">
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Festivals
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3} className="text-lg-center">
            <Link to="/standups">
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