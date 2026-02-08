import React, { useState } from "react";
import "../src/css/App.css";
import "../src/css/login.css";
import Photo from "./img/Login-photo.png";
import UserTypeToggle from "./components/UserTypeToggle";

// pages
import StudentDashboard from "../src/pages/dashboard/student.dashboard";
import AdminDashboard from "../src/pages/dashboard/admin.dashboard";
import TeacherDashboard from "../src/pages/dashboard/teacher.dashboard";

function App() {
  // 'auth' for login/register, 'dashboard' for the student page
  const [view, setView] = useState("auth");
  const [showLogin, setShowLogin] = useState(true);
  const [userType, setUserType] = useState("");

  // Handler to "Log In"
  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (userType === "Admin") {
      setView("admin_dashboard");
    } else if (userType === "Teacher") {
      setView("teacher_dashboard");
    } else if (userType === "Student") {
      setView("student_dashboard");
    }
  };

  // --- 1. RENDER DASHBOARD ---
  if (view === "admin_dashboard") {
    return <AdminDashboard onLogout={() => setView("auth")} />;
  } else if (view === "teacher_dashboard") {
    return <TeacherDashboard onLogout={() => setView("auth")} />;
  } else if (view === "student_dashboard") {
    return <StudentDashboard onLogout={() => setView("auth")} />;
  }

  return (
    <div className="App">
      <div className="left">
        {showLogin ? (
          /* LOGIN CONTAINER */
          <div className="container login-container">
            <h1>Welcome to ProgSense</h1>
            <p className="p login">A Self-Assessment Tool for ICT Students</p>

            <UserTypeToggle
              mode="login"
              onChange={(type) => setUserType(type)}
            />

            <form className="login-form" onSubmit={handleAuthSubmit}>
              <label>Username</label>
              <input
                type="text"
                className="input username"
                placeholder="e.g. Juan Dela Cruz"
                required
              />
              <label>Password</label>
              <input type="password" className="input password" required />

              <div className="addition">
                <div className="rememberme">
                  <input type="checkbox" id="rem" />
                  <label htmlFor="rem">Remember me</label>
                </div>
                <div className="forgotpass">
                  <a href="#">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="btn login-btn">
                Sign In as {userType}
              </button>
            </form>

            <span className="noaccount">
              <p>Don't have account?</p>
              <button
                className="btn sign-up"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogin(false);
                }}
              >
                Sign Up
              </button>
            </span>
          </div>
        ) : (
          /* REGISTER CONTAINER */
          <div className="container register-container">
            <h1>Create Account</h1>
            <p>Join the ProgSense community</p>

            <UserTypeToggle
              mode="register"
              onChange={(type) => setUserType(type)}
            />

            <form className="login-form" onSubmit={handleAuthSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                className="input login"
                placeholder="e.g. Juan Dela Cruz"
                required
              />
              <label>Username</label>
              <input type="text" className="input login" required />
              <label>Password</label>
              <input type="password" className="input login" required />
              <label>Confirm Password</label>
              <input type="password" className="input login" required />

              <button type="submit" className="btn login-btn">
                Register as {userType}
              </button>
            </form>

            <span className="noaccount">
              <p>Already have an account?</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogin(true);
                }}
              >
                Login
              </a>
            </span>
          </div>
        )}
      </div>

      <div className="right">
        <img src={Photo} alt="Login" />
        <div className="quote">
          <h2 className="qoute-text">
            "Understanding your programming journey is the first step to
            mastering it."
          </h2>
          <p className="quote-author">Lyceum of Alabang • A.Y. 2025–2026</p>
        </div>
      </div>
    </div>
  );
}

export default App;
