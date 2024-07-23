import React, { useState } from 'react';
import Login from './Login';
import ChangePassword from './ChangePassword'; 
import ForgotPassword from './ForgotPassword';
import Signup from './Signup';
import ActiveEmployees from './ActiveEmployees';
import AddEmployee from './AddEmployee';
import EditProfile from './EditProfile';
import Personnel from './Personnel';
import Delete from './Delete';
import Search from './Search';
import Logout from './Logout'; // Import the Logout component
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 

  const loginAsAdmin = (status) => {
    setIsAdmin(status);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'signup':
        return <Signup navigate={setCurrentPage} />;
      case 'login':
        return <Login navigate={setCurrentPage} loginAsAdmin={loginAsAdmin} />;
      case 'active-employees':
        return <ActiveEmployees navigate={setCurrentPage} />;
      case 'add-employee':
        return <AddEmployee navigate={setCurrentPage} />;
      case 'edit-profile':
        return <EditProfile navigate={setCurrentPage} />;
      case 'personnel':
        return <Personnel navigate={setCurrentPage} />;
      case 'delete':
        return <Delete navigate={setCurrentPage} isAdmin={isAdmin} loginAsAdmin={loginAsAdmin} />;
      case 'search':
        return <Search navigate={setCurrentPage} />;
      case 'change-password':
        return <ChangePassword navigate={setCurrentPage} />;
      case 'forgot-password':
        return <ForgotPassword navigate={setCurrentPage} />;
      case 'logout': // Handle the logout page
        return <Logout navigate={setCurrentPage} />;
      default:
        return <Login navigate={setCurrentPage} loginAsAdmin={loginAsAdmin} />; // Default to 'login' page
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
