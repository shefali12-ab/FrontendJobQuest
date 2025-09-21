import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobElement from "./components/JobElement";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import CompanyElement from "./components/CompanyElement";
import Profile from "./components/Profile";

const App = () => {
  return (
    <>
    
    
    <Router>
    <Navbar />
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/admin/Dashboard" element = {<AdminDashboard />}/>
        <Route path = "/companies" element = {<CompanyElement />}/>
        <Route path="/Jobs" element={<JobElement />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;
