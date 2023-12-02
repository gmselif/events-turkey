import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function FilterBar({ CityOptions, LocationOptions, handleClearButton, city, location, startDate, endDate, cityHandleChange, locationHandleChange, startDateHandleChange, endDateHandleChange, filterHandleSubmit }) {
  return (
    <Container fluid="lg">
      <Container className="bg-dark mt-5 mt-xl-3 mb-5 p-3 rounded-5">
        <Form onSubmit={filterHandleSubmit}>
          <Row className="align-items-center">
            <Col xs={6} xl={2} className="mb-3 mb-xl-0">
              <select
                value={city}
                onChange={cityHandleChange}
                className="w-100 form-control-lg rounded-pill">
                <option value="" defaultValue>
                  Cities...
                </option>
                {CityOptions()}
              </select>
            </Col>
            <Col xs={6} xl={2} className="mb-3 mb-xl-0">
              <select
                value={location}
                onChange={locationHandleChange}
                className="w-100 form-control-lg rounded-pill">
                <option value="" defaultValue>Mekanlar...</option>
                {LocationOptions()}
              </select>
            </Col>
            <Col xs={6} xl={2} className="mb-3 mb-xl-0">
              <input
                type='date'
                value={startDate ? startDate : new Date()}
                onChange={startDateHandleChange}
                className="w-100 form-control form-control-lg rounded-pill" />
            </Col>
            <Col xs={6} xl={2} className="mb-3 mb-xl-0">
              <input
                type='date'
                value={endDate ? endDate : new Date()}
                onChange={endDateHandleChange}
                placeholder='DD-MM-YYYY'
                className="w-100 form-control form-control-lg rounded-pill" />
            </Col>
            <Col xs={6} xl={2}>
              <Button type="submit" variant="warning" className="w-100 rounded-pill p-2">Filter</Button>
            </Col>
            <Col xs={6} xl={2}>
              <Button type="button" onClick={handleClearButton} variant="warning" className="w-100 rounded-pill p-2">Clear</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  )
}

export default FilterBar