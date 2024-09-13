import React from 'react';
import './Admin.css';

function Admin({ navigate }) {
  return (
    <div className="admin">
      {/* Header for the admin page */}
      <h1>Admin</h1>

      {/* Input field for entering the name */}
      <input type="text" placeholder="Name" />

      {/* Input field for entering the surname */}
      <input type="text" placeholder="Surname" />

      {/* Input field for entering the ID number */}
      <input type="text" placeholder="ID Number" />

      {/* Input field for entering the work ID */}
      <input type="text" placeholder="Work ID" />

      {/* Input field for entering the position */}
      <input type="text" placeholder="Position" />

      {/* Input field for entering the password */}
      <input type="password" placeholder="Password" />

      {/* Input field for confirming the password */}
      <input type="password" placeholder="Confirm Password" />

      {/* Button to navigate to the login page */}
      <button onClick={() => navigate('login')}>Admin</button>

      {/* Button to navigate to the login page with a prompt for existing users */}
      <button onClick={() => navigate('login')}>Already have an account? Log in.</button>
    </div>
  );
}

export default Admin;


