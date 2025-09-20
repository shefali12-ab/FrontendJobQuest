// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
import Login from "./Login";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const Navbar = ({ jobSeeker, setJobSeeker }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [authRole, setAuthRole] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => navigate("/")}>
            JobQuest
          </div>

          {/* Nav Items */}
          <ul className="navbar-menu">
            <li className="navbar-item" onClick={() => setShowLogin(true)}>
              Admin
            </li>
            <li className="navbar-item" onClick={() => setAuthRole("Employee")}>
              Employee
            </li>
            <li className="navbar-item" onClick={() => setAuthRole("Job Seeker")}>
              Job Seeker
            </li>
          </ul>

          {/* Profile Icon for Job Seeker */}
          {jobSeeker && (
            <div className="profile-icon" onClick={() => navigate("/profile")}>
              👤
            </div>
          )}
        </div>
      </nav>

      {/* Admin Login */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      {/* Employee / Job Seeker Auth */}
      {authRole && (
        <AuthForm
          role={authRole}
          onClose={() => setAuthRole(null)}
          setJobSeeker={setJobSeeker}
        />
      )}
    </>
  );
};

export default Navbar;
