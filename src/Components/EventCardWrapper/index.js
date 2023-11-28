import React from 'react'
import EventCard from '../EventCard'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';

function EventCardWrapper({ items, setFilteredData }) {
  return (
    <Container className='container pb-5'>
      <Row>
          {
            items.map(item => {
              return <EventCard key={item.id} item={item} data={items} setFilteredData={setFilteredData}></EventCard>
            })
          }
      </Row>
    </Container>
  )
}

export default EventCardWrapper