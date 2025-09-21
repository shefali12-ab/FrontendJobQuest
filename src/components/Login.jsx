import React, {useState} from "react";
import "./Login.css";
import {useNavigate} from 'react-router-dom'
import {login} from "../api"

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const token = await login(email, password);
      localStorage.setItem("jwt", token);
      navigate("/admin/Dashboard")
    } catch(err){
      alert("Invalid credentials");
    }
  };
  
  return (
    <div className="login-overlay">
      <div className="login-container">
        <h2 className="login-title">Admin Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" value = {email} onChange = { (e) => setEmail(e.target.value)} placeholder="Enter email" required />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <input type="password" value = {password} onChange = {(e)=> setPassword(e.target.value)} placeholder="Enter password" required />
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
