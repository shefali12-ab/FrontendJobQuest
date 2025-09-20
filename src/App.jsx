// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobElement from "./components/JobElement";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  const [jobSeeker, setJobSeeker] = useState(null); // store logged-in Job Seeker info

  return (
    <Router>
      <Navbar jobSeeker={jobSeeker} setJobSeeker={setJobSeeker} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getalljobs" element={<JobElement />} />
        <Route path="/profile" element={<Profile jobSeeker={jobSeeker} />} />
      </Routes>
    </Router>
  );
};

export default App;
