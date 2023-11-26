import React from 'react'
import EventCard from '../EventCard'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';

function EventCardWrapper({ items }) {
  return (
    <Container className='container pb-5'>
      <Row>
          {
            items.map(item => {
              return <EventCard key={item.id} item={item}></EventCard>
            })
          }
      </Row>
    </Container>
  )
}

export default EventCardWrapper