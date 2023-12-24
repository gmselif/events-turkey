import React, { useContext } from 'react'
import EventCardWrapper from '../../components/eventCardWrapper'
import { Context } from '../../context'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'moment-timezone'
import moment from 'moment'

function Favorites() {
  const { data, status, favorites, setFilteredData, setShowFavButton } = useContext(Context)

  const showFutureEvents = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
    ))
    setShowFavButton(true)
  }

  return (
    <div className="mt-5 pt-5">
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && favorites?.length != 0 ?
        <EventCardWrapper /> :
        <Container className="justify-content-center py-5 mb-5" >
          <Row className="my-5 mx-3 border border-1 rounded-5 border-secondary shadow-lg overflow-hidden">
            <Col xs={8} md={6} lg={5} className="ps-0">
              <Button variant="warning" className="w-100" style={{ borderBottomRightRadius: "30px" }} >Favorites (0)</Button>
            </Col>
            <Col xs={12} className="mt-5 text-center">
              <i className="bi bi-bookmark-heart-fill text-warning" style={{ fontSize: "8rem" }} />
            </Col>
            <Col xs={12} className="my-5 text-center">
              You have did not choose any favorite event. Would you like to choose <Link to="/" onClick={showFutureEvents} >one?</Link>
            </Col>
          </Row>
        </Container>
      }
    </div>
  )
}

export default Favorites