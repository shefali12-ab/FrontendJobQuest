import React, { useEffect, useState } from "react";
import "./CompanyElement.css"; // optional, for styling


const CompanyElement = () => {
  const [company, setCompany] = useState([]);
//   const [appliedCompanys, setAppliedCompanys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [form, setForm] = useState({
    name: "",
    industry: "",
    website: "",
  });

//Get All Companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const res = await fetch("http://localhost:8081/companies", {
          headers: {
            "Authorization": `Bearer ${token}`,
            // "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          throw new Error("Failed to fetch companies");
        }

        const data = await res.json();
        setCompany(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

//Add A Company

   const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
//   const handleAdd = async(e) => {
//     e.preventDefault();

//     // const CompanyData = {
//     //     name: "form.name",
//     //     industry: "form.industry",
//     //     website: "form.website"
//     // };
 const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("jwt");
      const res = await fetch("http://localhost:8081/companies", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to add company");

      const newCompany = await res.json();
      setCompany([...company, newCompany]);
      alert("Company added successfully!");
      setForm({ name: "", industry: "", website: "" });
    } catch (err) {
      alert(err.message);
    }
  };

   const handleDelete = async (companyId) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;

    try {
      const token = localStorage.getItem("jwt");
      const res = await fetch(`http://localhost:8081/companies/${companyId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Failed to delete company");

      setCompany(company.filter((c) => c.companyId !== companyId));
      alert("Company deleted successfully!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading companies...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="company-list">
      <h2>All Companies</h2>
      <form onSubmit={handleAdd} className="company-form">
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="industry"
          placeholder="Industry"
          value={form.industry}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
          required
        />
        <button type="submit" className="apply-btn">Add Company</button>
      </form>

      {company.length === 0 ? (
        <p>No companies available.</p>
      ) : (
        company.map((c) => (
        //   const applied = appliedCompanies.includes(company.companyId);
          <div key={c.companyId} className="company-card">
            <h3 className = "company-title">{c.name}</h3>
            <p><strong>Industry:</strong> {c.industry}</p>
            <p><b>Website :</b>{c.website} </p>
            <p><strong>Jobs Listed:</strong>jobs</p>

            <button
               className = "delete-btn"
               onClick = {()=> handleDelete(c.companyId)} > Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CompanyElement;