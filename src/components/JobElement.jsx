import React from "react";
import "./JobElement.css";

const jobs = [
  {
    jobId: "101",
    title: "Frontend Developer",
    description: "Build and maintain UI components using React.",
    companyName: "TechCorp",
    available: 5,
    filled: 2,
  },
  {
    jobId: "102",
    title: "Backend Engineer",
    description: "Develop REST APIs with Node.js.",
    companyName: "Innovate Ltd.",
    available: 3,
    filled: 1,
  },
];

const JobElement = () => {
  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      {jobs.map((job) => (
        <div className="job-card" key={job.jobId}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p><b>Company:</b> {job.companyName}</p>
          <p><b>Available Positions:</b> {job.available}</p>
          <p><b>Filled Positions:</b> {job.filled}</p>
          <button className="apply-btn">Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobElement;
