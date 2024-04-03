import React from 'react';
import './Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ onPageChange }) => {
    return (
    <header>
        <div className="navbar">
          <a className="navbar-brand" href="/">AI ADVANCE</a>
        </div>

        <div className="menu">
            <DropdownButton id="dropdown-basic-button" title="Datasets">
                <Dropdown.Item href="#/Shanghai" onClick={() => onPageChange('shanghai')}>Shanghai dataset</Dropdown.Item>
                <Dropdown.Item href="#/Geolife" onClick={() => onPageChange('geo')}>Geolife dataset</Dropdown.Item>
            </DropdownButton>
        </div>
    </header>
  );
};

export default Header;