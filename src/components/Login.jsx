import React from "react";
import "./Login.css";

const Login = ({ onClose }) => {

  
  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2 className="login-title">Admin Login</h2>
        <form className="login-form">
          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>

          {/* Button */}
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Close */}
        <button className="close-btn" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Login;
