import React from 'react';
import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import home from './Image/home.png';

const Header = ({ onPageChange }) => {
    return (
    <header>
        <div className="navbar">
          <h2 className="navbar-brand">AI ADVANCE - Dataset Visualization</h2>
        </div>

        <div className="menu">
          <Button onClick={() => window.location.href = '/'}>
            <img id="icon" src={home} alt="Home" />
          </Button>
          <DropdownButton id="dropdown-basic-button" title="Datasets">
              <Dropdown.Item href="#/Shanghai" onClick={() => onPageChange('shanghai')}>Shanghai dataset</Dropdown.Item>
              <Dropdown.Item href="#/Geolife" onClick={() => onPageChange('geo')}>Geolife dataset</Dropdown.Item>
          </DropdownButton>
        </div>
    </header>
  );
};

export default Header;