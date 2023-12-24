import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import GetAll from '../../Network/GetAll'
import { Context } from '../../Context'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import moment from 'moment'

function Menu() {
  const { data } = useQuery("events", GetAll)
  const { setFilteredData, favorites, setShowFavButton } = useContext(Context);

  const showFutureEvents = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') > 0
    ))
    setShowFavButton(true)
  }

  const pastEventsHandleClick = () => {
    setFilteredData(data?.filter(event =>
      moment(event.startDate).diff(moment().format("YYYY-MM-DD"), 'days') <= 0
    ))
    setShowFavButton(true)
  }

  const handleFavorites = () => {
    if (favorites) {
      setShowFavButton(false) 
      setFilteredData(favorites)
    }
  }

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container /* fluid="lg"*/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Brand>
          <Link to="/"
            onClick={showFutureEvents}
            className="text-warning pe-sm-auto text-decoration-none"
            style={{ fontSize: "36px" }}
          >
            Events Turkey
          </Link>
        </Navbar.Brand>

        <div className="w-40"></div>

        <Navbar.Collapse id="responsive-navbar-nav" className="bg-dark">
          <Nav className="me-auto">
            <Link to="/" onClick={showFutureEvents} className="nav-link text-light">
              Events
            </Link>
            <Link to="/past-events" onClick={pastEventsHandleClick} className="nav-link text-light">
              Past Events
            </Link>
            <Link to="/aboutus" className="nav-link text-light">
              About Us
            </Link>
            <Link to="/contactus" className="nav-link text-light">
              Contact Us
            </Link>
            <Link to="/favorites" className="nav-link text-light" onClick={handleFavorites}>
              Favorites
            </Link>
          </Nav>
          <Nav>
            <Link to="/signin" className="nav-link text-light">
              <Button variant="warning">
                Sign In
              </Button>
            </Link>
            <Link to="/signup" className="nav-link text-light">
              <Button variant="warning">
                Sign Up
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu