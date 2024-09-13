import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile({ navigate }) {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    position: '',
    email: '',
    idNumber: '',
    mobile: '',
    image: '',
  });

  const handleInputChange = (e) => {
    setEmployeeData({ ...employeeData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setEmployeeData({ ...employeeData, image: reader.result });
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save updated employee data to local storage
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = storedEmployees.map(emp =>
      emp.id === employeeData.id ? employeeData : emp
    );
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    alert('Profile updated successfully!');
    navigate('active-employees'); // Navigate back to active employees page
  };

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employeeData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={employeeData.position}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={employeeData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={employeeData.idNumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Phone Number"
          value={employeeData.mobile}
          onChange={handleInputChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <p>Image Upload: {employeeData.image ? 'File chosen' : 'No file chosen'}</p>
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('active-employees')}>Back to Active Employees</button>
    </div>
  );
}

export default EditProfile;
