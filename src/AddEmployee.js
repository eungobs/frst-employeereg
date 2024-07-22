import React, { useState } from 'react';
import './AddEmployee.css';

function AddEmployee({ navigate }) {
  const [employee, setEmployee] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    idNumber: '',
    employeeNumber: '',
    startDate: '',
    maritalStatus: '',
    nextOfKin: '',
    nextOfKinContact: '',
    imageUrl: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imageUrl') {
      setEmployee({ ...employee, [name]: URL.createObjectURL(files[0]) });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(employee.email)) {
      setError('Invalid email address.');
      return;
    }

    if (!validatePhoneNumber(employee.phone)) {
      setError('Invalid phone number.');
      return;
    }

    if (!validateIDNumber(employee.idNumber)) {
      setError('ID number must be exactly 13 digits.');
      return;
    }

    if (!employee.idNumber || !employee.employeeNumber) {
      setError('ID number and Employee number are required.');
      return;
    }

    setError('');
    
    // Save employee data to local storage
    saveToLocalStorage(employee);
    
   
    alert('Employee added successfully!');
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

  const validateIDNumber = (idNumber) => {
    const re = /^[0-9]{13}$/;
    return re.test(idNumber);
  };

  const saveToLocalStorage = (employee) => {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div className="add-employee">
      <h2>Add a New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full name" value={employee.name} onChange={handleChange} required />
        <input type="text" name="position" placeholder="Position" value={employee.position} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Mobile number" value={employee.phone} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={employee.address} onChange={handleChange} required />
        <input type="text" name="gender" placeholder="Gender" value={employee.gender} onChange={handleChange} required />
        <input type="text" name="idNumber" placeholder="ID (SAP Number)" value={employee.idNumber} onChange={handleChange} required />
        <input type="text" name="employeeNumber" placeholder="Employee number" value={employee.employeeNumber} onChange={handleChange} required />
        <input type="date" name="startDate" placeholder="Start date" value={employee.startDate} onChange={handleChange} required />
        <input type="text" name="maritalStatus" placeholder="Marital status" value={employee.maritalStatus} onChange={handleChange} required />
        <input type="text" name="nextOfKin" placeholder="Next of kin" value={employee.nextOfKin} onChange={handleChange} required />
        <input type="text" name="nextOfKinContact" placeholder="Next of kin contact" value={employee.nextOfKinContact} onChange={handleChange} required />
        <input type="file" name="imageUrl" onChange={handleChange} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Save</button>
      </form>
      <button onClick={() => navigate('active-employees')}>Back</button>
    </div>
  );
}

export default AddEmployee;

