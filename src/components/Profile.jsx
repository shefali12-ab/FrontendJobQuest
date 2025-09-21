import React from "react";
import "./Profile.css";

<header className="dashboard-header">
        <h1>JobSeeker</h1>
        <div className = "profile-container">
        <div className="profile-icon" onClick={handleProfileClick}>👤</div>
            {menuOpen && (
            <div className="profile-menu">
              <button onClick={fetchAdminProfile}>View Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>
            {admin && (
        <div className="admin-profile">
          <h2>Admin Profile</h2>
          <p><strong>User ID:</strong> {admin.userId}</p>
          <p><strong>Name:</strong> {admin.userName}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
      )}


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