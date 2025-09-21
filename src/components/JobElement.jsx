import React, { useEffect, useState } from "react";
import "./JobElement.css"; // optional, for styling

const JobElement = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await fetch("http://localhost:8081/jobs", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

    useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await fetch("http://localhost:8081/applications/users/user", {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        if (!res.ok) throw new Error("Failed to fetch applied jobs");
        const data = await res.json();
        setAppliedJobs(data.map((job) => job.jobId));
      } catch (err) {
        console.error(err);
      }
    };

    fetchAppliedJobs();
  }, []);

  // Handle Apply button click
const handleApply = async (jobId) => {
  try {
    const token = localStorage.getItem("jwt");
    const res = await fetch(`http://localhost:8081/applications/${jobId}/apply`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Failed to apply");
    alert("Applied successfully!");
    setAppliedJobs((prev) => [...prev, jobId]);
  } catch (err) {
    alert(err.message);
  }
};



  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="job-list">
      <h2>Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map((job) => {
          const applied = appliedJobs.includes(job.jobId);
          return(
          <div key={job.jobId} className="job-card">
              {/* <span className={`job-status ${job.isOpen ? "open" : "closed"}`}>
                  {job.isOpen ? "Open" : "Closed"}
              </span> */}
            {/* {job.isOpen && <div className = "job-status"> Open</div>} */}

            <h3 className = "job-title">{job.jobTitle}</h3>
            <p><strong>Company:</strong> {job.companyName}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><b>Available Positions :</b>{job.positionsAvailable} </p>
            <p><b>Filled :</b>{job.positionsFilled} </p>
            <p><strong>Description:</strong> {job.description}</p>
            {job.skills && job.skills.length>0 && (
            <p>
              <strong>Skills :</strong> {job.skills.map(s => s.skillName).join(", ")} </p> )}
            <div className="job-card-footer">
            <button
                  className="apply-btn"
                  disabled={appliedJobs.includes(job.jobId)}
                  onClick={() => handleApply(job.jobId)}
              >
            {appliedJobs.includes(job.jobId) ? "Already Applied" : "Apply"}
            </button>
            </div>
          </div>
        );
})
      )}
    </div>
  );
};

export default JobElement;

