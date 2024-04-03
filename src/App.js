import React, { useState } from 'react';
import Header from './Header';
import Shanghai from './Shanghai';
import Geolife from './Geolife';

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
      default:
        return null;
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