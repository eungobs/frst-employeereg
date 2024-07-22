// src/Delete.js
import React, { useState } from 'react';
import './Delete.css';

const initialEmployees = [
  { id: 1, name: 'Mpilo Mnaka', position: 'Manager', refNumber: 'EMP001' },
  { id: 2, name: 'Jane Smith', position: 'Sales Representative', refNumber: 'EMP002' },
  { id: 3, name: 'Amelia Johnson', position: 'Technician', refNumber: 'EMP003' },
  { id: 4, name: 'Tomas Dali', position: 'Cashier', refNumber: 'EMP004' },
  { id: 5, name: 'Michael Brown', position: 'Electrician', refNumber: 'EMP005' },
  { id: 6, name: 'Linda Witsona', position: 'Customer Service', refNumber: 'EMP006' },
  { id: 7, name: 'David Leetso', position: 'Stock Manager', refNumber: 'EMP007' },
  { id: 8, name: 'Andrew Majola', position: 'Accountant', refNumber: 'EMP008' },
  { id: 9, name: 'James Mohammad', position: 'Security', refNumber: 'EMP009' },
  { id: 10, name: 'Patricia Nukeri', position: 'Cleaner', refNumber: 'EMP010' },
  { id: 11, name: 'Munny Mpapi', position: 'Marketing Director', refNumber: 'EMP011' },
  { id: 12, name: 'Palane Pilot', position: 'Web Designer', refNumber: 'EMP012' },
  { id: 13, name: 'Tebogo Zwane', position: 'Frontend Developer', refNumber: 'EMP013' },
  { id: 14, name: 'Ntombi Mkhize', position: 'Sales Representative', refNumber: 'EMP014' },
  { id: 15, name: 'James Tlou', position: 'Software Engineer', refNumber: 'EMP015' },
  { id: 16, name: 'Emily Ngwenya', position: 'HR Manager', refNumber: 'EMP016' },
  { id: 17, name: 'Peter Molefe', position: 'Accountant', refNumber: 'EMP017' },
  { id: 18, name: 'Sarah Lethabo', position: 'Customer Support', refNumber: 'EMP018' },
  { id: 19, name: 'Michael Ndlovu', position: 'Security', refNumber: 'EMP019' },
  { id: 20, name: 'Anna Nkosi', position: 'Technician', refNumber: 'EMP020' },
  { id: 21, name: 'Elizabeth Ndzukule', position: 'Admin', refNumber: 'EMP021' }
];

function Delete({ navigate, isAdmin, loginAsAdmin }) {
  const [employees, setEmployees] = useState(initialEmployees);
  const [adminName, setAdminName] = useState('');

  const handleLogin = () => {
    if (adminName.toLowerCase() === 'elizabeth ndzukule') {
      loginAsAdmin(true);
    } else {
      alert('Access Denied');
    }
  };

  if (!isAdmin) {
    return (
      <div className="delete">
        <h2>Admin Login</h2>
        <input
          type="text"
          placeholder="Enter Admin Name"
          value={adminName}
          onChange={(e) => setAdminName(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => navigate('active-employees')}>Back</button>
      </div>
    );
  }

  const handleDelete = (employeeId) => {
    const updatedEmployees = employees.filter(employee => employee.id !== employeeId);
    setEmployees(updatedEmployees);
    alert(`Employee with ID ${employeeId} has been deleted.`);
  };

  return (
    <div className="delete">
      <h2>Delete Employee</h2>
      <div className="employee-list">
        {employees.map(employee => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <p>{employee.position}</p>
            <p>{employee.refNumber}</p>
            <button onClick={() => handleDelete(employee.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('active-employees')}>Back</button>
    </div>
  );
}

export default Delete;
