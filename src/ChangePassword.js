import React, { useState } from 'react';
import './ChangePassword.css';

function ChangePassword({ navigate }) {
  // State to hold the current password, new password, and password confirmation
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the new password and confirmation match
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    
    // Save the password change details to local storage
    savePasswordChange({ currentPassword, newPassword });
    
    // Notify the user that the password has been changed successfully
    alert('Password changed successfully');
  };

  // Save the password change details to local storage
  const savePasswordChange = (passwords) => {
    localStorage.setItem('passwordChange', JSON.stringify(passwords));
  };

  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for the current password */}
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)} // Update current password state on change
          required
        />
        {/* Input field for the new password */}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)} // Update new password state on change
          required
        />
        {/* Input field for confirming the new password */}
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state on change
          required
        />
        {/* Button to submit the form */}
        <button type="submit">Change Password</button>
      </form>
      {/* Button to navigate back to the login page */}
      <button onClick={() => navigate('login')}>Back to Login</button>
    </div>
  );
}

export default ChangePassword;
