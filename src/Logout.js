import React from 'react';
import './Logout.css';

function Logout({ navigate }) {
  return (
    <div className="logout">
      <h2>You have been logged out.</h2>
      <button onClick={() => navigate('login')}>Back to Login</button>
    </div>
  );
}

export default Logout;

