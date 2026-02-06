// pages/dashboard/student.dashboard.jsx
import React from "react";

const StudentDashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>
      <p>Welcome to your ProgSense learning journey.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default StudentDashboard;
