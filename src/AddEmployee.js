import React, { useState } from 'react';
import './AddEmployee.css';

function AddEmployee({ navigate }) {
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    email: '',
    mobileNumber: '',
    address: '',
    gender: '',
    id: '',
    employeeNumber: '',
    startDate: '',
    maritalStatus: '',
    nextOfKin: '',
    nextOfKinContact: '',
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      ...formData,
      imageUrl: image || 'https://via.placeholder.com/150', // Fallback image if no image is uploaded
    };

    // Retrieve existing employees from local storage
    const existingEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    
    // Add new employee data
    existingEmployees.push(employeeData);
    
    // Save updated employee list to local storage
    localStorage.setItem('employees', JSON.stringify(existingEmployees));

    alert('Employee added successfully');
    navigate('active-employees');
  };

  return (
    <div className="add-employee">
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="mobileNumber" placeholder="Mobile number" value={formData.mobileNumber} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
        <input type="text" name="id" placeholder="ID (SAP Number)" value={formData.id} onChange={handleChange} required />
        <input type="text" name="employeeNumber" placeholder="Employee number" value={formData.employeeNumber} onChange={handleChange} required />
        <input type="date" name="startDate" placeholder="Start date" value={formData.startDate} onChange={handleChange} required />
        <input type="text" name="maritalStatus" placeholder="Marital status" value={formData.maritalStatus} onChange={handleChange} required />
        <input type="text" name="nextOfKin" placeholder="Next of kin" value={formData.nextOfKin} onChange={handleChange} required />
        <input type="text" name="nextOfKinContact" placeholder="Next of kin contact" value={formData.nextOfKinContact} onChange={handleChange} required />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {image && <img src={image} alt="Employee" className="employee-image" />}
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('active-employees')}>Back</button>
    </div>
  );
}

export default AddEmployee;
