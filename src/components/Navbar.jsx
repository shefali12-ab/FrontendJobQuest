import React, { useState } from "react";
import "./Navbar.css";
import Login from "./Login";
import AuthForm from "./AuthForm";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [authRole, setAuthRole] = useState(null);
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            JobQuest
          </div>

          {/* Nav Items */}
          <ul className="navbar-menu">
            <li 
              className="navbar-item"
              onClick={() => setShowLogin(true)}
            >
              Admin
            </li>
            <li 
              className="navbar-item"
              onClick={() => setAuthRole("Employee")}
            >
              Employee
            </li>
            <li 
              className="navbar-item"
              onClick={() => setAuthRole("Job Seeker")}
            >
              Job Seeker
            </li>
          </ul>
        </div>
      </nav>

      {/* Admin Login */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      {/* Employee / Job Seeker Auth */}
      {authRole && (
        <AuthForm 
          role={authRole} 
          onClose={() => setAuthRole(null)} 
        />
      )}
    </>
  );
};

export default Navbar;
