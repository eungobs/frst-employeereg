import React, { useState } from 'react';
import './Login.css';

function Login({ navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const correctUsername = 'eungobs@gmail.com';
  const correctPassword = '000000';

  // Function to handle login
  const handleLogin = () => {
    // Check if the entered username and password match the correct credentials
    if (username === correctUsername && password === correctPassword) {
      navigate('active-employees'); // Navigate to the active employees page if credentials are correct
    } else {
      alert('Invalid username or password'); // Show an error message for incorrect credentials
    }
  };

  return (
    <div className="login">
      {/* Button to navigate to the admin page */}
      <button className="admin-link" onClick={() => navigate('admin')}>
        Admin
      </button>

      {/* Main header for the login page */}
      <h1>Teekga Electrical (Pty) LTD</h1>

      {/* Input field for entering the username */}
      <input
        type="text"
        placeholder="User name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Input field for entering the password */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* Button to submit the login form and navigate to the active employees page */}
      <button onClick={handleLogin}>Login</button>

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
