import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css";

const AuthForm = ({ role, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Fake login check for Job Seeker
      if (role === "Job Seeker") {
        // Redirect to getalljobs
        navigate("/getalljobs");
      } else {
        alert(`${role} logged in successfully!`);
      }
    } else {
      alert(`${role} registered successfully!`);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        <h2 className="auth-title">
          {role} {isLogin ? "Login" : "Register"}
        </h2>

        {/* Tabs */}
        <div className="auth-tabs">
          <button
            className={`tab-btn ${isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`tab-btn ${!isLogin ? "active" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="Enter username" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" required />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm password" required />
              </div>

              {role === "Job Seeker" && (
                <>
                  <div className="form-group">
                    <label>Resume URL</label>
                    <input type="url" placeholder="Enter resume URL" required />
                  </div>
                  <div className="form-group">
                    <label>Designation</label>
                    <input type="text" placeholder="Enter designation" required />
                  </div>
                </>
              )}

              {role === "Employee" && (
                <div className="form-group">
                  <label>Designation</label>
                  <input type="text" placeholder="Enter designation" required />
                </div>
              )}
            </>
          )}

          {isLogin && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Enter email" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter password" required />
              </div>
            </>
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
