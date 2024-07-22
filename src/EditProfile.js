import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile({ navigate }) {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    nextOfKin: '',
    maritalStatus: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(profile.email)) {
      setError('Invalid email address. Must contain "@" and ".com".');
      return;
    }

    if (!validatePhoneNumber(profile.phone)) {
      setError('Invalid phone number. Must be exactly 10 digits.');
      return;
    }

    setError('');
    // Save profile changes (this can be replaced with an API call)
    alert('Profile updated successfully!');
    navigate('active-employees');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full names"
          value={profile.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Mobile number"
          value={profile.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={profile.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={profile.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nextOfKin"
          placeholder="Next of kin"
          value={profile.nextOfKin}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="maritalStatus"
          placeholder="Marital status"
          value={profile.maritalStatus}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('active-employees')}>Back</button>
    </div>
  );
}

export default EditProfile;
