import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function SearchBar({ searchText, handleChange, searchbarHandleSubmit }) {
  return (
    <Container fluid="lg">
      <Container className="bg-dark mt-5 p-3 rounded-pill">
        <Form onSubmit={searchbarHandleSubmit}>
          <Row className="align-items-center">
            <Col xs={9} md={10}>
              <input
                className="w-100 form-control form-control-lg rounded-pill"
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Etkinlik, sanatçı, şehir veya mekan arayın"
              />
            </Col>
            <Col xs={3} md={2} className="text-end">
              <Button variant="warning" type="submit" className="w-100 rounded-pill py-2">Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>

  )
}

export default SearchBar