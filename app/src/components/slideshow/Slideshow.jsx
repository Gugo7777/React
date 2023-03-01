import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import nkar3 from '../../image/big_kiss_1002.jpg'
import nkar4 from '../../image/big_hits_1002.jpg'
import nkar5 from '../../image/heart.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slideshow.css'
export default function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nkar3}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nkar4}
          alt="Second slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={nkar5}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}