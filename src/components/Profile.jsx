// Profile.jsx
import React from "react";
import "./Profile.css";

const Profile = ({ jobSeeker }) => {
  if (!jobSeeker) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        No user logged in
      </h2>
    );
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-card">
        <p><b>Name:</b> {jobSeeker.name}</p>
        <p><b>Email:</b> {jobSeeker.email}</p>
        <p><b>Designation:</b> {jobSeeker.designation}</p>
        <p>
          <b>Resume:</b>{" "}
          <a href={jobSeeker.resume} target="_blank" rel="noreferrer">
            View Resume
          </a>
        </p>
        <p><b>Applications Applied:</b> {jobSeeker.applications}</p>
      </div>
    </div>
  );
};

export default Profile;
