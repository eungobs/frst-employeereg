import React, { useState } from 'react';
import './ChangePassword.css';

function ChangePassword({ navigate }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match');
      return;
    }
    
    // Save the password change details to local storage
    savePasswordChange({ currentPassword, newPassword });
    
    // Add your password change logic here
    alert('Password changed successfully');
  };

  const savePasswordChange = (passwords) => {
    // Store the passwords in local storage (you can use more secure methods in a real application)
    localStorage.setItem('passwordChange', JSON.stringify(passwords));
  };

  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Change Password</button>
      </form>
      <button onClick={() => navigate('login')}>Back to Login</button>
    </div>
  );
}

export default ChangePassword;
