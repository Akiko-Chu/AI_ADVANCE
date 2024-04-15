import React from 'react';
import './Slide.css';
import { Carousel, Container, Image } from 'react-bootstrap';

import shanghai_base from './Image/shanghai_base_station.png';
import traj from './Image/traj_length.png';
import uniq from './Image/uniq.png';
import clustering from './Image/clustering.png';

function Shanghai() {
  return (
    <Container className='slide'>
      <h2>Shanghai Dataset</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <Image className="d-block w-100" src={shanghai_base} alt="First slide" />
            <Carousel.Caption>
            <h4>Shanghai Base Stations</h4>
            <p>Here is the data exploration showing the locations of base Stations.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={traj} alt="Second slide" />
            <Carousel.Caption>
            <h4>Overview for Trajectory Length</h4>
            <p>Here is the bar diagram showing the trajectory length for Shanghai users.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={clustering} alt="Third slide" />
            <Carousel.Caption>
            <h4>Preprocessing</h4>
            <p>Using clustering to gather users.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={uniq} alt="Fourth slide" />
            <Carousel.Caption>
            <h4>Uniqueness found from Shanghai Dataset</h4>
            <p>Uniqueness determines whether the users can be found in a unique pattern.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Shanghai;