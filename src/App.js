import React, { useState } from 'react';
import Header from './Header';
import Shanghai from './Shanghai';
import Geolife from './Geolife';
import Home from './Home';
import Outcome from './Outcome';
import GeolifeOutcome from './GeolifeOutcome';
import ShanghaiOutcome from './ShanghaiOutcome';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'shanghai':
        return <Shanghai />;
      case 'geo':
        return <Geolife />;
      case 'geoout':
        return <GeolifeOutcome />;
      case 'shanghaiout':
        return <ShanghaiOutcome />;
      case 'outcome':
        return <Outcome />;
      default:
        return <Home />;;
    }
  };

  return (
    <div className="App">
      <Header onPageChange={handlePageChange} />
      <div className="container">
        {renderPage(currentPage)}
      </div>
    </div>
  );
}

export default App;