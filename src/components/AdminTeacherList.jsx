import React, { useState } from "react";
import close from "../img/close.png";

const teachers = [
  {
    id: 1,
    name: "Dr. Danilo Cruz",
    username: "danilo.cruz",
    email: "d.cruz@loa.edu.ph",
    dept: "ICT Department",
    empId: "LOA-2024-0015",
  },
  {
    id: 2,
    name: "Engr. Maria Clara",
    username: "m.clara2026",
    email: "m.clara@loa.edu.ph",
    dept: "Computer Science",
    empId: "LOA-2023-0102",
  },

  {
    id: 3,
    name: "Dr. Danilo Cruz",
    username: "danilo.cruz",
    email: "d.cruz@loa.edu.ph",
    dept: "ICT Department",
    empId: "LOA-2024-0015",
  },
  {
    id: 4,
    name: "Engr. Maria Clara",
    username: "m.clara2026",
    email: "m.clara@loa.edu.ph",
    dept: "Computer Science",
    empId: "LOA-2023-0102",
  },
];

const AdminTeacherList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="admin-table-section">
      <div className="admin-header-flex">
        <div className="admin-table-header">
          <h2>Teacher Accounts</h2>
          <p>List of registered faculty members.</p>
        </div>
        <button className="admin-add-btn" onClick={() => setIsModalOpen(true)}>
          + Add Teacher
        </button>
      </div>

      <table className="admin-data-table">
        <thead>
          <tr className="admin-table-row">
            <th className="admin-th">Name</th>
            <th className="admin-th">Username</th>
            <th className="admin-th">Email</th>
            <th className="admin-th">Department</th>
            <th className="admin-th">Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher.id} className="admin-table-row">
              <td className="admin-td bold">{teacher.name}</td>
              <td className="admin-td">{teacher.username}</td>
              <td className="admin-td">{teacher.email}</td>
              <td className="admin-td">{teacher.dept}</td>
              <td className="admin-td">{teacher.empId}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-content">
            <div className="admin-modal-header">
              <h3>Create Teacher Account</h3>
              <button className="close-x" onClick={() => setIsModalOpen(false)}>
                <img className="img-close" src={close} alt="Close" />
              </button>
            </div>
            <form className="admin-modal-form">
              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label">Full Name</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="e.g. Maria Santos"
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Username</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="m.santos88"
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Email Address</label>
                <input
                  type="email"
                  className="admin-input"
                  placeholder="m.santos@loa.edu.ph"
                />
              </div>

              <div className="admin-form-row">
                <div className="admin-form-group">
                  <label className="admin-label">Department</label>
                  <select className="admin-input">
                    <option>ICT Department</option>
                    <option>Computer Science</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label className="admin-label">Employee ID</label>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="LOA-2026-XXXX"
                  />
                </div>
              </div>

              <div className="admin-modal-actions">
                <button
                  type="button"
                  className="admin-cancel-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-submit-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTeacherList;
