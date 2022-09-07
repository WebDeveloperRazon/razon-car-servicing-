import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import banar1 from '../../../images/banner/banner1.jpg'
import banar2 from '../../../images/banner/banner2.jpg'
import banar3 from '../../../images/banner/banner3.jpg'
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar1}
          alt="First slide"
        />
        <Carousel.Caption>
         <h3>Welcome To Car's Doctor</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar2}
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        </div>
    );
};

export default Banner;