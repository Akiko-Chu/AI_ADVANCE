import React from 'react';
import './Slide.css';
import { Carousel, Container, Image } from 'react-bootstrap';

import sh_acc from './Image/out_sh_acc.png';
import sh_error from './Image/out_sh_error.png';
import sh_uniq from './Image/out_sh_uniq.png';

function ShanghaiOutcome() {
  return (
    <Container className='slide'>
      <h2>Shanghai Outcome</h2>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <Image className="d-block w-100" src={sh_acc} alt="First slide" />
            <Carousel.Caption>
            <h4>Accuracy of baseline experiment</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={sh_error} alt="Second slide" />
            <Carousel.Caption>
            <h4>Error distribution after recovery</h4>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100" src={sh_uniq} alt="Third slide" />
            <Carousel.Caption>
            <h4>Uniqueness distribution for different number of location</h4>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </Container>
  );
}
export default ShanghaiOutcome;