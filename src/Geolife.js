import React from 'react';
import './Slide.css';
import { Carousel, Container, Image } from 'react-bootstrap';
import geolife1 from './Image/geolife1.png';

function Geolife() {
  return (
    <Container className='slide'>
        <h2>Geolife Dataset</h2>
        <Carousel>
            <Carousel.Item>
                <Image className="d-block w-100" src={geolife1} alt="First slide" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Data exploration 1 - ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src={geolife1} alt="Second slide" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Data exploration 2 - ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src={geolife1} alt="Third slide" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Data exploration 3 - ...</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
  );
}

export default Geolife;