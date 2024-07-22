import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword({ navigate }) {
  // Retrieve email from local storage if it exists
  const savedEmail = JSON.parse(localStorage.getItem('forgotPasswordEmail')) || '';
  const [email, setEmail] = useState(savedEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save email to local storage as a JSON string
    localStorage.setItem('forgotPasswordEmail', JSON.stringify(email));
    
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
