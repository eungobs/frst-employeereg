import React from 'react';
import './Loader.css';

// Loader component that displays a loading spinner
const Loader = () => {
  return (
    <div className="loader">
      {/* Container for the loader */}
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;

