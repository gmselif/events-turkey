import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useQuery } from 'react-query'
import GetAll from '../../Network/GetAll'
import { Context } from '../../Context'
import 'moment-timezone'
import moment from 'moment';

function FilterBar() {
  const { data } = useQuery("events", GetAll)
  const { setFilteredData } = useContext(Context);
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  //Handle Change Functions
  const cityHandleChange = (e) => {
    setCity(e.target.value)
  }
  const locationHandleChange = (e) => {
    setLocation(e.target.value)
  }
  const startDateHandleChange = (e) => {
    setStartDate(moment(e.target.value).format("YYYY-MM-DD"))
  }
  const endDateHandleChange = (e) => {
    setEndDate(moment(e.target.value).format("YYYY-MM-DD"))
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

    const futureData = data.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
    )
    
    setFilteredData(futureData)
  }

  //Handle Filter Operation
  const filterHandleSubmit = (e) => {
    e.preventDefault()

    !city && !location && !startDate && !endDate && alert("You have to at least fill one input")

    var filterByCity = []
    var filterByLocation = []
    var filterByStartDate = []
    var filterByEndDate = []

    const futureData = data.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
    )

    var result = futureData?.filter(item => {
      filterByCity = []
      filterByLocation = []
      filterByStartDate = []
      filterByEndDate = []

      city ? (item.city.toLowerCase() === city.toLowerCase() && filterByCity.push(item)) : filterByCity.push(true)
      location ? (item.location.toLowerCase() === location.toLowerCase() && filterByLocation.push(item)) : filterByLocation.push(true)
      startDate ? (moment(item.startDate).diff(startDate, "days") > 0 && filterByStartDate.push(item)) : filterByStartDate.push(true)
      endDate ? (moment(endDate).diff(item.startDate, "days") > 0 && filterByEndDate.push(item)) : filterByEndDate.push(true)

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
                <option value="" defaultValue>Locations...</option>
                {LocationOptions()}
              </select>
            </Col>
            <Col xs={6} xl={2} className="mb-3 mb-xl-0">
              <input
                type='date'
                value={startDate}
                onChange={startDateHandleChange}
                className="w-100 form-control form-control-lg rounded-pill" />
            </Col>
            <Col xs={6} xl={2} className="mb-3 mb-xl-0">
              <input
                type='date'
                value={endDate}
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