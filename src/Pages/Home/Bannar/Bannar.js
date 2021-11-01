import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./bannar.css";
import bannar1 from "../../../images/bannar/bannar1.jpg"
import bannar2 from "../../../images/bannar/bannar2.jpg"
import bannar3 from "../../../images/bannar/bannar3.jpg"
import bannar4 from "../../../images/bannar/bannar4.jpg"

const Bannar = () => {
    return (
       
        <div className="bannar">
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block h-75 w-100 bannarImg"
      src={bannar1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bannarImg"
                        src={bannar2}
                        alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bannarImg"
      src={bannar3}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 bannarImg"
      src={bannar4}
      alt="Four slide"
    />

    
  </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Bannar;