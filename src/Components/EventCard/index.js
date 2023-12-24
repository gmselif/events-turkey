import React, { useContext } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'
import Moment from 'react-moment'
import 'moment-timezone'
import slugify from 'react-slugify'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

function EventCard({ item }) {
  var placeholder = "https://source.unsplash.com/150x150/?event1_1"
  const { filteredData, setFilteredData, favorites, setFavorites, showFavButton } = useContext(Context);

  const handleClick = () => {
    setFilteredData(
      filteredData.filter(event => event.location.toLowerCase() === item.location.toLowerCase())
    )
  }

  const handleFavoriteClick = () => {
    favorites
      && !favorites.some(event => event.id === item.id)
      && setFavorites([...favorites, item])
  }

  const handleFavDelete = () => {
    setFilteredData(filteredData.filter(event => event.id !== item.id))
    setFavorites(filteredData.filter(event => event.id !== item.id))
  }

  const minPrice = Math.min(...Object.values(item.price))

  return (
    <Col xs={10} sm={6} lg={4} xl={3} className="px-3 px-sm-1 px-md-4 px-lg-3 px-xl-2 px-xxl-3">
      <Card className="h-100 rounded-1 overflow-hidden shadow-lg">
        <Link to={`/${item.eventType.toLowerCase()}s/${slugify(item.name)}`} className="text-decoration-none">
          <Card.Img
            variant="top"
            className="px-3 pt-3 position-relative z-0"
            style={{ height: "270px" }}
            src={item.images[0] ? item.images[0] : placeholder}
          />
        </Link>
        {!showFavButton &&
          <i
            onClick={handleFavDelete}
            className="bi bi-x-circle-fill text-warning px-3 pt-2 bg-light shadow-lg position-absolute"
            style={{ fontSize: "2rem", top: "0", right: "0", cursor: "pointer" }}
          />
        }

        <Card.Body>
          <Link to={`/${slugify(item.name)}`} className="text-decoration-none">
            <Card.Title className="text-truncate text-dark">
              {item.name}
            </Card.Title>
            <Card.Text className="text-truncate text-dark">
              {item.description}
            </Card.Text>
          </Link>

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

          {showFavButton ?
            <Row>
              <Col xs={9}>
                <Button variant="warning" className="rounded-pill w-100">
                  {item.price ? `${minPrice} $` : `Free`}
                </Button>
              </Col>
              <Col xs={3} className="text-end">
                <OverlayTrigger
                  delay={{ hide: 450, show: 300 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Add to Favorites
                    </Tooltip>
                  )}
                  placement="bottom"
                >
                  <Button
                    variant="danger"
                    className="rounded-circle px-2 py-1"
                    onClick={handleFavoriteClick}
                  >
                    <i className="bi bi-heart-fill text-white" style={{ fontSize: "1.2rem" }} />
                  </Button>
                </OverlayTrigger>
              </Col>
            </Row>
            :
            <Button variant="warning" className="rounded-pill w-100">
              {item.price ? `${minPrice} $` : `Free`}
            </Button>
          }
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EventCard