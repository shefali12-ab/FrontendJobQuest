import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../api"; // 👈 import our API helper
import "./AuthForm.css";

const AuthForm = ({ role, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // form state
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    resumeUrl: "",
    designation: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // 🔑 login
        const token = await login(form.email, form.password);
        localStorage.setItem("jwt", token);

        if (role === "Job Seeker") {
          navigate("/Jobs");
        } else if (role === "Employee") {
          navigate("/employee-dashboard"); // placeholder route
        } else if (role === "Admin") {
          navigate("/admin/Dashboard");
        }
      } else {
        // 📝 register
        if (form.password !== form.confirmPassword) {
          alert("Passwords do not match");
          return;
        }

        const userData = {
          username: form.username,
          email: form.email,
          password: form.password,
          role: role.toUpperCase().replace(" ", "_"), // e.g. "JOB_SEEKER"
          designation: form.designation,
          resumeUrl: form.resumeUrl
        };

        await register(userData);
        alert("Registration successful. Please login.");
        setIsLogin(true); // switch back to login tab
      }
    } catch (err) {
      alert(err.message);
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
                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {role === "Job Seeker" && (
                <>
                  <div className="form-group">
                    <label>Resume URL</label>
                    <input
                      type="url"
                      name="resumeUrl"
                      placeholder="Enter resume URL"
                      value={form.resumeUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Designation</label>
                    <input
                      type="text"
                      name="designation"
                      placeholder="Enter designation"
                      value={form.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {role === "Employee" && (
                <div className="form-group">
                  <label>Designation</label>
                  <input
                    type="text"
                    name="designation"
                    placeholder="Enter designation"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
            </>
          )}

          {isLogin && (
            <>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
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

