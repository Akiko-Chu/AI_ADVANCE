import React from 'react';
import './Slide.css';
import { Carousel, Container, Image } from 'react-bootstrap';

import locations from './Image/geolife_locations.png';
import geolife1 from './Image/geolife1.png';
import interpolation from './Image/interpolation.png';

function Geolife() {
  return (
    <Container className='slide'>
        <h2>Geolife Dataset</h2>
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <Image className="d-block w-100" src={locations} alt="First slide" />
                <Carousel.Caption>
                <h4>Geolife user locations</h4>
                <p>This is the world-widely map showing user locations.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src={geolife1} alt="Second slide" />
                <Carousel.Caption>
                <h4>Sample user trajectory</h4>
                <p>Here is the user trajectories foe each Monday.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image className="d-block w-100" src={interpolation} alt="Third slide" />
                <Carousel.Caption>
                <h4>Linear interpolation method</h4>
                <p>Int the preprocessing step, interpolation helps to recover the user trajectories in the dataset.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Container>
  );
}

export default Geolife;