import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useQuery } from 'react-query'
import GetAll from '../../Network/GetAll'
import { Context } from '../../Context'

function SearchBar() {
  const { data } = useQuery("events", GetAll)
  const { setFilteredData } = useContext(Context);
  const [searchText, setSearchText] = useState("")

  const searchHandleChange = (e) => {
    setSearchText(e.target.value)
  }

  //Handle Search Bar Operations
  const searchbarHandleSubmit = (e) => {
    e.preventDefault();

    var result = searchText ? data.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.location.toLowerCase().includes(searchText) ||
      item.city.toLowerCase().includes(searchText) ||
      item.eventType.toLowerCase().includes(searchText)
    ) : alert("You have to fill in")

    setFilteredData(result)
    setSearchText("")
  }

  return (
    <Container fluid="lg">
      <Container className="bg-dark mt-5 p-3 rounded-pill">
        <Form onSubmit={searchbarHandleSubmit}>
          <Row className="align-items-center">
            <Col xs={9} md={10}>
              <input
                className="w-100 form-control form-control-lg rounded-pill"
                type="text"
                value={searchText}
                onChange={searchHandleChange}
                placeholder="Etkinlik, sanatçı, şehir veya mekan arayın"
              />
            </Col>
            <Col xs={3} md={2} className="text-end">
              <Button variant="warning" type="submit" className="w-100 rounded-pill py-2">Search</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Container>
  )
}

export default SearchBar