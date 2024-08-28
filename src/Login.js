import React from 'react';
import './Login.css';

function Login({ navigate }) {
  return (
    <div className="login">
      <button
        className="admin-link"
        onClick={() => navigate('admin')}
      >
        Admin
      </button>
      <h1>Teekga Electrical (Pty) LTD</h1>
      <input type="text" placeholder="User name" />
      <input type="password" placeholder="Password" />
      <button onClick={() => navigate('active-employees')}>Login</button>
      <div className="links">
        <button onClick={() => navigate('change-password')}>Change password?</button>
        <button onClick={() => navigate('forgot-password')}>Forgot password?</button>
      </div>
    </div>
  );
}

export default Login;
