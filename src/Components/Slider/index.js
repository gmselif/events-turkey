import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import picture1 from '../../assets/Pictures/picture1.png'
import picture2 from '../../assets/Pictures/picture2.png'
import picture3 from '../../assets/Pictures/picture3.png'
import picture4 from '../../assets/Pictures/picture4.png'
import Container from 'react-bootstrap/Container';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade style={{marginTop: "9vh"}}>
      <Carousel.Item style={{ height: "60vh" }}>
        <Image src={picture1} text="First slide" fluid />
      </Carousel.Item>
      <Carousel.Item style={{ height: "60vh" }}>
        <Image src={picture2} text="Second slide" fluid />
      </Carousel.Item>
      <Carousel.Item style={{ height: "60vh" }}>
        <Image src={picture3} text="Third slide" fluid />
      </Carousel.Item>
      <Carousel.Item style={{ height: "60vh" }}>
        <Image src={picture4} text="Third slide" fluid />
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider