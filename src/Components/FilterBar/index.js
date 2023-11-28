import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

function FilterBar({CityOptions, LocationOptions, handleClearButton, city, location, startDate, endDate, cityHandleChange, locationHandleChange, startDateHandleChange, endDateHandleChange, filterHandleSubmit}) {
  return (
    <Container className="my-5 p-4 bg-dark rounded-pill">
              <Row>
                <Col xs={12}>
                  <form onSubmit={filterHandleSubmit}>
                    <Row className="align-items-center">
                      <Col xs={3}>
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
                      <Col xs={3}>
                        <select
                          value={location}
                          onChange={locationHandleChange}
                          className="w-100 form-control-lg rounded-pill">
                          <option value="" defaultValue>Mekanlar...</option>
                          {LocationOptions()}
                        </select>
                      </Col>
                      <Col xs={2}>
                        <input
                          type='date'
                          value={startDate ? startDate : new Date()}
                          onChange={startDateHandleChange}
                          className="w-100 form-control form-control-lg rounded-pill" />
                      </Col>
                      <Col xs={2}>
                        <input
                          type='date'
                          value={endDate ? endDate : new Date()}
                          onChange={endDateHandleChange}
                          placeholder='DD-MM-YYYY'
                          className="w-100 form-control form-control-lg rounded-pill" />
                      </Col>
                      <Col>
                        <Button type="submit" variant="warning">Search</Button>
                      </Col>
                      <Col>
                        <Button type="button" onClick={handleClearButton} variant="danger" size="lg">Clear</Button>
                      </Col>
                    </Row>
                  </form>
                </Col>
              </Row>
            </Container>
  )
}

export default FilterBar