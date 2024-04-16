import React from 'react';
import './Slide.css';
import { Carousel, Container, Image } from 'react-bootstrap';

import compare from './Image/out_compare.png';
import locations_compare from './Image/out_locations_compare.png';

function Outcome() {
  return (
    <Container className='slide'>
      <h2>Overall Outcome</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <Image className="d-block w-100" src={compare} alt="First slide" />
            <Carousel.Caption>
            <h4>Shanghai Base Stations</h4>
            <p>Here is the data exploration showing the locations of base Stations.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={locations_compare} alt="Second slide" />
            <Carousel.Caption>
            <h4>Overview for Trajectory Length</h4>
            <p>Here is the bar diagram showing the trajectory length for Shanghai users.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Outcome;