import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function SearchBar({searchText, handleChange, searchbarHandleSubmit}) {
  return (
    <Container className="mt-5 p-4 bg-dark rounded-pill">
      <Row className="align-items-center">
        <Col xs={12}>
          <form onSubmit={searchbarHandleSubmit}>
            <Row className="align-items-center">
              <Col xs={11}>
                <input
                  className="w-100 form-control form-control-lg rounded-pill"
                  type="text"
                  value={searchText}
                  onChange={handleChange}
                  placeholder="Etkinlik, sanatçı, şehir veya mekan arayın"
                />
              </Col>
              <Col>
                <Button variant="warning" type="submit">Search</Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default SearchBar