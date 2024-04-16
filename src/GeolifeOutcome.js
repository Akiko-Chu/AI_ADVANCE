import React from 'react';
import './Slide.css';
import { Carousel, Container, Image } from 'react-bootstrap';

import geo_acc from './Image/out_geo_acc.png';
import geo_error from './Image/out_geo_error.png';
import geo_uniq from './Image/out_geo_uniq.png';

function GeolifeOutcome() {
  return (
    <Container className='slide'>
      <h2>Geolife Outcome</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <Image className="d-block w-100" src={geo_acc} alt="First slide" />
            <Carousel.Caption>
            <h4>Shanghai Base Stations</h4>
            <p>Here is the data exploration showing the locations of base Stations.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={geo_error} alt="Second slide" />
            <Carousel.Caption>
            <h4>Overview for Trajectory Length</h4>
            <p>Here is the bar diagram showing the trajectory length for Shanghai users.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={geo_uniq} alt="Third slide" />
            <Carousel.Caption>
            <h4>Overview for Trajectory Length</h4>
            <p>Here is the bar diagram showing the trajectory length for Shanghai users.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default GeolifeOutcome;