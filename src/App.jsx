import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobElement from "./components/JobElement";
// import Home from "./components/Home";

const App = () => {
  return (
    <>
    
   
    
    <Router>
    <Navbar />
    {/* <Home/> */}
      <Routes>
        <Route path="/getalljobs" element={<JobElement />} />
      </Routes>
    </Router>
    </>
    
  );
};

export default App;
