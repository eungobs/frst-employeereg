import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword({ navigate }) {
  // Retrieve the previously saved email from local storage, if available
  const savedEmail = JSON.parse(localStorage.getItem('forgotPasswordEmail')) || '';
  
  // State to hold the email input value
  const [email, setEmail] = useState(savedEmail);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save the current email to local storage for future reference
    localStorage.setItem('forgotPasswordEmail', JSON.stringify(email));
    
    // Notify the user that the password reset link has been sent
    alert('Password reset link sent to your email');
  };

  return (
    <div className="forgot-password">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for the user to enter their email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          required
        />
        {/* Button to submit the form */}
        <button type="submit">Send Reset Link</button>
      </form>
      {/* Button to navigate back to the login page */}
      <button onClick={() => navigate('login')}>Back to Login</button>
    </div>
  );
}

export default ForgotPassword;
