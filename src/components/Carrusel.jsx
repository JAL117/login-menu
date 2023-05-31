import React from 'react';
import img1 from '../img/11.jpg';
import img2 from '../img/12.jpg';
import img3 from '../img/13.jpg';
import img4 from '../img/11.jpg';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', margin:'30px' }}>
    <Carousel slide={false}>
            <Carousel.Item>
          <img
            className="w-100"
            src={img1}
        
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={img2}
       
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={img3}
    
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={img4}
       
          />
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;