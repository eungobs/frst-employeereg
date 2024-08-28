import React from 'react';
import './Admin.css';

function Admin({ navigate }) {
  return (
    <div className="admin">
      <h1>Admin</h1>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Surname" />
      <input type="text" placeholder="ID Number" />
      <input type="text" placeholder="Work ID" />
      <input type="text" placeholder="Position" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button onClick={() => navigate('login')}>Admin</button>
      <button onClick={() => navigate('login')}>Already have an account? Log in.</button>
    </div>
  );
}

export default Admin;

