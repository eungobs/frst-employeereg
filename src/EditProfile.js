import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile({ navigate }) {
  // State to manage the form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [nextOfKin, setNextOfKin] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [image, setImage] = useState(null);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImage(reader.result); // Store the image as a base64 encoded string
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an updated employee object
    const updatedEmployee = {
      id: Date.now(), // Generate a unique ID for now
      name: fullName,
      email: email,
      mobile: mobile,
      address: address,
      gender: gender,
      nextOfKin: nextOfKin,
      maritalStatus: maritalStatus,
      imageUrl: image, // Save the uploaded image
    };

    // Retrieve existing employees from local storage
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    
    // Add the updated employee to the list
    employees.push(updatedEmployee);
    
    // Save the updated employees list back to local storage
    localStorage.setItem('employees', JSON.stringify(employees));
    
    // Navigate back to the ActiveEmployees page
    navigate('active-employees');
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full names"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Next of kin"
          value={nextOfKin}
          onChange={(e) => setNextOfKin(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Marital status"
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          required
        />
        {/* Image Upload Field */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          required
        />
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('active-employees')}>Back</button>
    </div>
  );
}

export default EditProfile;
