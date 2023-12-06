import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import 'moment-timezone'
import moment from 'moment'
import { Container, Row, Col, Button } from 'react-bootstrap'

function NavigationButtons() {
  const { setFilteredData, data } = useContext(Context);

  const concertHandleClick = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
      && event.eventType.toLowerCase() === "concert"
    ))
  }

  const theatreHandleClick = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
      && event.eventType.toLowerCase() === "theatre"
    ))
  }

  const festivalHandleClick = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
      && event.eventType.toLowerCase() === "festival"
    ))
  }

  const standupHandleClick = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
      && event.eventType.toLowerCase() === "standup"
    ))
  }

  return (
    <Container fluid className="bg-dark">
      <Container className="p-3">
        <Row className="justify-content-center">
          <Col xs={6} md={3} className="mb-3 mb-md-0">
            <Link to="/Concerts" onClick={concertHandleClick}>
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Concerts
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Theaters" onClick={theatreHandleClick}>
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Theaters
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3}>
            <Link to="/Festivals" onClick={festivalHandleClick}>
              <Button variant="warning" size="lg" className="w-100 py-3 py-xl-4 rounded-4">
                Festivals
              </Button>
            </Link>
          </Col>
          <Col xs={6} md={3} className="text-lg-center">
            <Link to="/Standups" onClick={standupHandleClick}>
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