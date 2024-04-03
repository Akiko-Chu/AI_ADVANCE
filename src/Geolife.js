import React from 'react';
import './Slide.css';
import { Carousel, Image } from 'react-bootstrap';

function Geolife() {
  return (
    <div>
        <h2>Geolife Dataset</h2>
        <Carousel>
            <Carousel.Item>
                <Image className="d-block w-100" src="/Image/geolife1.png" alt="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Data exploration 1 - ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src="/Image/geolife1.png" alt="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Data exploration 2 - ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src="/Image/geolife1.png" alt="Third slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Data exploration 3 - ...</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Geolife;