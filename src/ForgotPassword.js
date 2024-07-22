import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword({ navigate }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    alert('Password reset link sent to your email');
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <button onClick={() => navigate('login')}>Back to Login</button>
    </div>
  );
}

export default ForgotPassword;
