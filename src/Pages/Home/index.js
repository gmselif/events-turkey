import React, { useState } from 'react'
import { useQuery } from "react-query"
import GetAll from '../../Network/GetAll'
import EventCardWrapper from '../../Components/EventCardWrapper';
import NavigationButtons from "../../Components/NavigationButtons"
import Slider from "../../Components/Slider"
import { Container, Row, Col, Button } from 'react-bootstrap';

function Home() {
  const { status, data } = useQuery("events", GetAll)
  const [filteredData, setFilteredData] = useState(data)
  const [searchText, setSearchText] = useState("")

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmit = (e) => {
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
    <div>
      {status === "error" && <p>Error fetching data</p>}
      {status === "loading" && <p>Fetching data...</p>}
      {status === "success" && (
        <>
          <Slider />
          <NavigationButtons />

          <Container className="py-5">
            <Row>
              <Col xs={8}>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={9}>
                      <input
                        className="w-100 form-control form-control-lg"
                        type="text"
                        value={searchText}
                        onChange={handleChange}
                        placeholder="Etkinlik, sanatçı, şehir veya mekan arayın"
                      />
                    </Col>
                    <Col>
                      <Button variant="dark" type="submit">Search</Button>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
          </Container>

          <EventCardWrapper key="wrapper" items={filteredData? filteredData : setFilteredData(data)} />
        </>
      )}
    </div>
  )
}

export default Home