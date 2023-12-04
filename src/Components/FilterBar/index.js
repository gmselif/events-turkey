import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useQuery } from 'react-query'
import GetAll from '../../Network/GetAll'
import { Context } from '../../Context'

function FilterBar() {
  const { data } = useQuery("events", GetAll)
  const { setFilteredData } = useContext(Context);
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  //Handle Change Functions
  const cityHandleChange = (e) => {
    setCity(e.target.value)
  }
  const locationHandleChange = (e) => {
    setLocation(e.target.value)
  }
  const startDateHandleChange = (e) => {
    setStartDate(e.target.value)
    console.log(startDate)
  }
  const endDateHandleChange = (e) => {
    setEndDate(e.target.value)
    console.log(endDate)
  }

  //Make Cities select options
  const CityOptions = () =>
    data.map(
      item => item.city).filter(
        (val, id, array) => { return array.indexOf(val) === id }).map(
          (city, index) => <option key={index} value={city}>{city}</option>
        )

  //Make Locations select options
  const LocationOptions = () => data.map(
    item => item.location).filter(
      (val, id, array) => { return array.indexOf(val) === id }).map(
        (location, index) => <option key={index} value={location}>{location}</option>
      );

  const ClearFilter = () => {
    setCity("")
    setLocation("")
    setStartDate("")
    setEndDate("")
  }

  const handleClearButton = () => {
    ClearFilter()
    setFilteredData(data)
  }

  //Handle Filter Operation
  const filterHandleSubmit = (e) => {
    e.preventDefault()

    !city && !location && !startDate && !endDate && alert("You have to at least fill one input")

    var filterByCity = []
    var filterByLocation = []
    var filterByStartDate = []
    var filterByEndDate = []

    var result = data.filter(item => {
      filterByCity = []
      filterByLocation = []
      filterByStartDate = []
      filterByEndDate = []

      city ? (item.city.toLowerCase() === city.toLowerCase() && filterByCity.push(item)) : filterByCity.push(true)
      location ? (item.location.toLowerCase() === location.toLowerCase() && filterByLocation.push(item)) : filterByLocation.push(true)
      startDate ? (item.startDate > startDate && filterByStartDate.push(item)) : filterByStartDate.push(true)
      endDate ? (item.startDate < endDate && filterByEndDate.push(item)) : filterByEndDate.push(true)

      return filterByCity[0] && filterByLocation[0] && filterByStartDate[0] && filterByEndDate[0]
    })

    setFilteredData(result)

    ClearFilter()
  }

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