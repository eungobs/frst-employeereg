import React from 'react';
import './Login.css';

function Login({ navigate }) {
  return (
    <div className="login">
      {/* Button to navigate to the admin page */}
      <button
        className="admin-link"
        onClick={() => navigate('admin')}
      >
        Admin
      </button>
      
      {/* Main header for the login page */}
      <h1>Teekga Electrical (Pty) LTD</h1>

      {/* Input field for entering the username */}
      <input type="text" placeholder="User name" />

      {/* Input field for entering the password */}
      <input type="password" placeholder="Password" />

      {/* Button to submit the login form and navigate to the active employees page */}
      <button onClick={() => navigate('active-employees')}>Login</button>

      {/* Container for additional links */}
      <div className="links">
        {/* Button to navigate to the change password page */}
        <button onClick={() => navigate('change-password')}>Change password?</button>
        
        {/* Button to navigate to the forgot password page */}
        <button onClick={() => navigate('forgot-password')}>Forgot password?</button>
      </div>
    </div>
  );
}

export default Login;
