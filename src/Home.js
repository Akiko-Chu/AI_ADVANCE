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
        <h2>Dataset Selection</h2>
        <p>
            This project utilizes two datasets: the Shanghai Telecom Dataset and Geolife. These datasets primarily 
            feature latitude, longitude, and timestamps, which are crucial for trajectory recovery. Each dataset 
            possesses specific characteristics suitable for the project:
            <li>Both datasets exhibit simple structures, facilitating easy modifications.</li>
            <li>The Shanghai Dataset aggregates data from diverse base stations, whereas the Geolife dataset tracks 
                individual user locations. This diversity enables comprehensive scenario coverage and analysis.</li>
            <li>The datasets differ in size, with Geolife being smaller. This discrepancy allows for an investigation
                into the influence of data size on recovery results.</li>
        </p>

        <h2>Architecture</h2>
        <div style={{ textAlign: 'center' }}>
            <Image src={architecture} style={{ width: '50vw', maxWidth: '100%' }}></Image>
        </div>
    </div>
  );
}

export default Geolife;