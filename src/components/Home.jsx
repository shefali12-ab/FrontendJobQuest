import React from "react";
import "./Home.css";
// import JobDoodle from "./assets/job_doodle.svg"; // put your doodle in src/assets

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to JobQuest</h1>
        <p className="home-subtitle">
          Find your dream job or the perfect candidate.
        </p>
        <button className="home-btn">Get Started</button>
      </div>

      <div className="home-image">
        {/* <img src={JobDoodle} alt="JobQuest illustration" /> */}
      </div>
    </div>
  );
};

export default Home;
