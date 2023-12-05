import React, { useContext } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import Moment from 'react-moment'
import 'moment-timezone'

function EventCard({ item }) {
  var placeholder = "https://source.unsplash.com/150x150/?event1_1"
  const { filteredData, setFilteredData } = useContext(Context);

  const handleClick = () => {
    setFilteredData(
      filteredData.filter(event => event.location.toLowerCase() === item.location.toLowerCase())
    )
  }

  const minPrice = Math.min(...Object.values(item.price))

  return (
    <Col xs={10} sm={6} lg={4} xl={3} className="px-5 px-sm-1 px-md-4 px-lg-3 px-xl-2 px-xxl-3">
      <Card className="h-100 rounded-1 overflow-hidden shadow-lg">
        <Link to={`/${item.id}`} className="text-decoration-none">
          <Card.Img
            variant="top"
            className="px-3 pt-3"
            style={{ height: "270px" }}
            src={item.images[0] ? item.images[0] : placeholder}
          />
        </Link>
        <Card.Body>
          <Card.Title className="text-truncate">{item.name}</Card.Title>
          <Card.Text className="text-truncate">
            {item.description}
          </Card.Text>
          <Link to="/" onClick={handleClick} className="text-decoration-none">
            <Card.Text className="text-truncate text-dark">
              <i className="bi bi-geo-alt-fill me-1" /> 
              {`${item.city} - ${item.location}`}
            </Card.Text>
          </Link>

          <Card.Text className="text-truncate text-dark">
            <i className="bi bi-stopwatch-fill me-1" />
            <Moment format='DD MMM YYYY' date={item.startDate} /> - <Moment format='DD MMM YYYY' date={item.endDate} />
          </Card.Text>
          <Button variant="warning" className="w-100 rounded-pill">
            {item.price ? `${minPrice} $` : `Free`}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EventCard