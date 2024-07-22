import React, { useState } from 'react';
import './Login.css';

function Login({ navigate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username !== 'Elizabeth Ndzukule') {
      setError('Invalid username.');
      return;
    }
    if (!/^[A-Z][a-z]{6}$/.test(password)) {
      setError('Password must start with one uppercase letter followed by exactly six lowercase letters.');
      return;
    }
    
    setError('');
    navigate('active-employees'); // Navigate to a different page on successful login
  };

  return (
    <div className="login">
      <button
        className="signup-link"
        onClick={() => navigate('signup')}
      >
        Signup
      </button>
      <h1>WATT ELECTRICAL**</h1>
      <input
        type="text"
        placeholder="Full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
      <div className="links">
        <button onClick={() => navigate('change-password')}>Change password?</button>
        <button onClick={() => navigate('forgot-password')}>Forgot password?</button>
        <button onClick={() => navigate('logout')}>Logout</button> {/* Added Logout button */}
      </div>
    </div>
  );
}

export default Login;
