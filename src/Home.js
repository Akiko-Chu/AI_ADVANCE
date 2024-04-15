import React from 'react';
import { Image } from 'react-bootstrap';
import architecture from './Image/architecture.png';

function Geolife() {
  return (
    <div>
        <h2>Introduction</h2>
        <p>This project's objective is to ascertain whether AI also poses a threat to the privacy of aggregated 
        location data. The primary research question is: "Can deep learning be harnessed to re-identify users 
        from aggregated location data with greater accuracy than the attack outlined in the paper 'Trajectory 
        Recovery from Ash'?"
        </p>
        <h2>Architecture</h2>
        <div style={{ textAlign: 'center' }}>
            <Image src={architecture} style={{ width: '50vw', maxWidth: '100%' }}></Image>
        </div>
    </div>
  );
}

export default Geolife;