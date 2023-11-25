import React from 'react'
import Slider from "./Slider"
import Buttons from "./Buttons"
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container>
      <Slider />
      <Buttons />
    </Container>
  )
}

export default Header