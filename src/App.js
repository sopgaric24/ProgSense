import React, { useState } from "react";
import "../src/css/App.css";
import "../src/css/login.css";
import Photo from "./img/Login-photo.png";
import UserTypeToggle from "./components/UserTypeToggle";
import info from "./img/info.png";

// pages
import StudentDashboard from "../src/pages/dashboard/student.dashboard";
import AdminDashboard from "../src/pages/dashboard/admin.dashboard";
import TeacherDashboard from "../src/pages/dashboard/teacher.dashboard";

function App() {
  // 'auth' for login/register, 'dashboard' for the student page
  const [view, setView] = useState("auth");
  // Change showLogin to authMode
  const [authMode, setAuthMode] = useState("login");
  const [userType, setUserType] = useState("Student");

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
        {/* --- LOGIN VIEW --- */}
        {authMode === "login" && (
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
                  <label htmlFor="rem" className="rememberme">
                    Remember me
                  </label>
                </div>
                <div className="forgotpass">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setAuthMode("forgot"); // Correctly switching to forgot mode
                    }}
                  >
                    Forgot password?
                  </a>
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
                onClick={(e) => {
                  e.preventDefault();
                  setAuthMode("register"); // Fixed from setShowLogin(false)
                }}
              >
                Sign Up
              </button>
            </span>
          </div>
        )}

        {/* --- REGISTER VIEW --- */}
        {authMode === "register" && (
          <div className="container register-container">
            <h1>Create Account</h1>
            <p>Join the ProgSense community</p>

            <div className="info-container">
              <img src={info} alt="Information" />
              <div className="info-text">
                <p>
                  <span>
                    <strong>Important: </strong>
                  </span>
                  Account creation is exclusively for students.
                </p>
                <p>
                  Please ensure your details match your official school records
                </p>
              </div>
            </div>

            <form className="login-form" onSubmit={handleAuthSubmit}>
              <label>Full Name</label>
              <input
                type="text"
                className="input login create-account"
                placeholder="e.g. Juan Dela Cruz"
                required
              />
              <label>Username</label>
              <input
                type="text"
                className="input login create-account"
                placeholder="e.g. JuanDelaCruz123"
                required
              />
              <label>Email</label>
              <input
                type="text"
                className="input login create-account"
                placeholder="e.g. sample@gmail.com"
                required
              />
              <label>
                Student Number <span>(LRN)</span>
              </label>
              <input
                type="number"
                className="input login create-account"
                required
                placeholder="e.g. 501141600721"
              />
              <label>Password</label>
              <input
                type="password"
                className="input login create-account"
                required
              />
              <label>Confirm Password</label>
              <input
                type="password"
                className="input login create-account"
                required
              />

              <button type="submit" className="btn login-btn create-account">
                Register
              </button>
            </form>

            <span className="noaccount">
              <p>Already have an account?</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setAuthMode("login"); // Fixed from setShowLogin(true)
                }}
              >
                Login
              </a>
            </span>
          </div>
        )}

        {/* --- FORGOT PASSWORD VIEW --- */}
        {authMode === "forgot" && (
          <div className="container forgot-container">
            <h1>Forgot Password?</h1>
            <p>Enter your details to reset your access</p>

            <div className="info-container">
              <img src={info} alt="Information" />
              <div className="info-text">
                <p>
                  <strong>Security Note:</strong> A reset link will be sent to
                  your official school email.
                </p>
              </div>
            </div>

            <form className="login-form">
              <label>Email</label>
              <input
                type="number"
                className="input login"
                placeholder="e.g. user@gmail.com"
                required
              />

              <button type="submit" className="btn login-btn">
                Send Reset Link
              </button>
            </form>

            <span className="noaccount">
              <p>Remembered your password?</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setAuthMode("login");
                }}
              >
                Back to Login
              </a>
            </span>
          </div>
        )}
      </div>

      {/* RIGHT SIDE REMAINS THE SAME */}
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
