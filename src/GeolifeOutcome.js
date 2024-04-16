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
            <h4>Accuracy of baseline experiment</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={geo_error} alt="Second slide" />
            <Carousel.Caption>
            <h4>Error Distribution</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={geo_uniq} alt="Third slide" />
            <Carousel.Caption>
            <h4>Uniqueness distribution for different number of location</h4>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default GeolifeOutcome;