import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [admin, setAdmin] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    setMenuOpen(!menuOpen);
  };

    // Fetch admin profile details (when needed)
  const fetchAdminProfile = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const userId = localStorage.getItem("userId"); // store userId at login
      const res = await fetch(`http://localhost:8081/users/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Failed to fetch admin profile");
      const data = await res.json();
      setAdmin(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    navigate("/"); // redirect to home/login page
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className = "profile-container">
        <div className="profile-icon" onClick={handleProfileClick}>👤</div>
            {menuOpen && (
            <div className="profile-menu">
              <button onClick={fetchAdminProfile}>View Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
            {admin && (
        <div className="admin-profile">
          <h2>Admin Profile</h2>
          <p><strong>User ID:</strong> {admin.userId}</p>
          <p><strong>Name:</strong> {admin.userName}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
      )}

      {/* Dashboard content */}
      <div className="dashboard-sections">
        {/* Company Section */}
        <div className="dashboard-card">
          <h2>Company</h2>
          <div className="button-group">
            <button className="apply-btn" onClick={() => navigate("/companies")}>View All Companies</button>
            <button className="apply-btn" onClick={() => handleNavigation("/companies")}>Add Company</button>
            <button className="apply-btn" onClick={() => handleNavigation("/companies/1")}>Update a Company</button>
            <button className="apply-btn" onClick={() => handleNavigation("/companies/1")}>Delete a Company</button>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="dashboard-card">
          <h2>Jobs</h2>
          <div className="button-group">
            <button className="apply-btn" onClick={() => handleNavigation("/jobs")}>Add Job</button>
            <button className="apply-btn" onClick={() => handleNavigation("/jobs/1")}>View Applications for a Job</button>
            <button className="apply-btn" onClick={() => handleNavigation("/jobs/1")}>Update a Job</button>
            <button className="apply-btn" onClick={() => handleNavigation("/jobs/1")}>Delete a Job</button>
          </div>
        </div>

        {/* Users Section */}
        <div className="dashboard-card">
          <h2>Users</h2>
          <div className="button-group">
            <button className="apply-btn" onClick={() => handleNavigation("/users/inactive")}>View All Inactive Users</button>
            <button className="apply-btn" onClick={() => handleNavigation("/users/inactive")}>Delete All Inactive Users</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;










// import React, {useEffect, useState} from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css"; // we'll add styles

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path); // later link these paths to API views/pages
//   };

//   return (
//     <div className="admin-dashboard">
//       {/* Header */}
//       <header className="dashboard-header">
//         <h1>Admin Dashboard</h1>
//         <div className="profile-icon">👤</div>
//       </header>

//       {/* Dashboard content */}
//       <div className="dashboard-sections">
//         {/* Company Section */}
//         <div className="dashboard-card">
//           <h2>Company</h2>
//           <ul>
//             {}
//             <li onClick={() => handleNavigation("/companies")}>View All Companies</li>
//             <li onClick={() => handleNavigation("/companies")}>Add Company</li>
//             <li onClick={() => handleNavigation("/companies/{companyId}")}>Update a Company</li>
//             <li onClick={() => handleNavigation("/companies/{companyId}")}>Delete a Company</li>
//           </ul>
//         </div>

//         {/* Jobs Section */}
//         <div className="dashboard-card">
//           <h2>Jobs</h2>
//           <ul>
//             <li onClick={() => handleNavigation("/jobs")}>Add Job</li>
//             {/* <li onClick={() => handleNavigation("/jobs/bulk-update")}>Bulk Update Applications</li> */}
//             <li onClick={() => handleNavigation("/jobs/applications/jobs/{jobId}/admin")}>View Applications for a Job</li>
//             <li onClick={() => handleNavigation("/jobs/{jobId}")}>Update a Job</li>
//             <li onClick={() => handleNavigation("/jobs/{jobId}")}>Delete a Job</li>
//           </ul>
//         </div>

//         {/* Users Section */}
//         <div className="dashboard-card">
//           <h2>Users</h2>
//           <ul>
//             <li onClick={() => handleNavigation("/users/inactive")}>View All Inactive Users</li>
//             <li onClick={() => handleNavigation("/users/inactive")}>Delete All Inactive Users</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
