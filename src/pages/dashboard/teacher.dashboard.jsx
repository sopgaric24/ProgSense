import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ViewResponse from "../../components/ViewResponse";
import "../../css/dashboard/teacher.dashboard.css";
import ViewIcon from "../../img/visible.png";
import file from "../../img/file.png";
import verified from "../../img/verified-user.png";

const TeacherDashboard = ({ onLogout }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [activeTab, setActiveTab] = useState("responses");

  // Function to open modal
  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    document.body.style.overflow = "auto";
  };

  // --- Sample student responses ---
  const part1response = [
    {
      question: "I find programming syntax difficult to understand.",
      answer: "1 - Strongly Disagree",
      classname: "rate-answer sd",
    },
    {
      question: "I struggle to follow the logic or flow of a program.",
      answer: "2 - Disagree",
      classname: "rate-answer d",
    },
    {
      question: "Debugging errors in my code is challenging for me.",
      answer: "5 - Strongly Agree",
      classname: "rate-answer sa",
    },
    {
      question:
        "I have difficulty applying programming concepts during coding activities.",
      answer: "4 - Agree",
      classname: "rate-answer a",
    },
  ];
  const part2response = [
    {
      question: "I feel confident when writing my own code.",
      answer: "4 - Agree",
      classname: "rate-answer a",
    },
    {
      question: "I feel motivated to improve my programming skills.",
      answer: "2 - Disagree",
      classname: "rate-answer d",
    },
    {
      question: "I feel anxious or nervous when doing programming tasks.",
      answer: "3 - Neutral",
      classname: "rate-answer n",
    },
    {
      question: "I enjoy learning programming despite its difficulty.",
      answer: "5 - Strongly Agree",
      classname: "rate-answer sa",
    },
  ];
  const part3response = [
    {
      question: "I practice coding outside of class hours.",
      answer: "Yes",
      classname: "yesno-answer yes",
    },
    {
      question:
        "I rely on classmates, AI tools, or online sources to complete programming tasks.",
      answer: "No",
      classname: "yesno-answer no",
    },
    {
      question:
        "I try to understand my mistakes after encountering errors in my code.",
      answer: "No",
      classname: "yesno-answer no",
    },
  ];
  const part4response = [
    {
      question:
        "What is the most difficult part of learning programming for you?",
      answer: `Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      classname: "readonly-answer",
    },
    {
      question:
        "How do you usually deal with difficulties or errors in programming?",
      answer: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      classname: "readonly-answer",
    },
    {
      question:
        "Can you describe a situation where you struggled while doing a programming task?",
      answer: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      classname: "readonly-answer",
    },
    {
      question:
        "What do you think causes these difficulties in learning programming?",
      answer: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      classname: "readonly-answer",
    },
    {
      question:
        "How do programming challenges affect your motivation or interest in the subject?",
      answer: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      classname: "readonly-answer",
    },
    {
      question:
        "In what ways did ProgSense help you reflect on your programming learning experience?",
      answer: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.`,
      classname: "readonly-answer",
    },
  ];

  const allResponses = [
    { title: "Part I. Programming Challenges", data: part1response },
    {
      title: "Part II. Confidence, Motivation, and Attitude",
      data: part2response,
    },
    { title: "Part III. Learning Strategies and Support", data: part3response },
    { title: "Part IV. Reflection and Tool Evaluation", data: part4response },
  ];

  // --- STUDENT LIST ---
  const students = [
    {
      id: 1,
      name: "John Doe",
      grade: "12",
      section: "Einstein-A",
      lrn: "501141600721",
      submissionDate: "2/7/2026",
      email: "user@gmail.com",
      data: allResponses,
    },
    {
      id: 2,
      name: "Sofia Dela Cruz Garcia",
      grade: "11",
      section: "Einstein-A",
      lrn: "501141600721",
      submissionDate: "2/7/2026",
      email: "user@gmail.com",
      data: allResponses,
    },
  ];

  const pendingStudents = [
    {
      id: 101,
      name: "Maria Clara Santos",
      grade: "12",
      section: "Einstein-A",
      lrn: "501141600721",
      date: "2/7/2026",
      email: "user@gmail.com",
      data: allResponses,
    },
    {
      id: 102,
      name: "Maria Clara Santos",
      grade: "12",
      section: "Einstein-A",
      lrn: "501141600721",
      date: "2/7/2026",
      email: "user@gmail.com",
      data: allResponses,
    },
    {
      id: 103,
      name: "Maria Clara Santos",
      grade: "12",
      section: "Einstein-A",
      lrn: "501141600721",
      date: "2/7/2026",
      email: "user@gmail.com",
      data: allResponses,
    },
    {
      id: 104,
      name: "Maria Clara Santos",
      grade: "12",
      section: "Einstein-A",
      lrn: "501141600721",
      date: "2/7/2026",
      email: "user@gmail.com",
      data: allResponses,
    },
  ];

  return (
    <div className="teacher-container">
      <Header onLogout={onLogout} usertype={"Teacher"} />

      {/* TABS SECTION */}
      <div className="tab-container">
        <div
          className={`tab-item ${activeTab === "responses" ? "active" : ""}`}
          onClick={() => setActiveTab("responses")}
        >
          <img className="profile-img" src={file} alt="Student" />
          <span>Student Responses</span>
        </div>
        <div
          className={`tab-item ${activeTab === "verify" ? "active" : ""}`}
          onClick={() => setActiveTab("verify")}
        >
          <img className="verify-img" src={verified} alt="Verified user" />
          <span>Pending Students</span>
        </div>
      </div>

      <div className="responses-container">
        <div className="responses-header">
          <h1>
            {activeTab === "responses"
              ? "Student Responses"
              : "Account Verification"}
          </h1>
          <p>
            {activeTab === "responses"
              ? "Recent assessments submitted by students."
              : "Review and approve new student registrations."}
          </p>
        </div>

        <div className="table-wrapper">
          {activeTab === "responses" ? (
            /* --- STUDENT RESPONSES TABLE --- */
            <table className="modern-table">
              <thead>
                <tr>
                  <th>
                    Student Name{" "}
                    {activeTab === "responses" ? "(Verified)" : "(Pending)"}
                  </th>
                  <th>Grade & Section</th>
                  <th>Student Number (LRN) </th>
                  <th>Date Submitted</th>
                  <th>Email</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td className="student-name-cell">{student.name}</td>
                    <td className="grade-section-cell">
                      Grade {student.grade} — {student.section}
                    </td>
                    <td>{student.lrn}</td>
                    <td className="date-cell">
                      {student.submissionDate || "2/7/2026"}
                    </td>
                    <td>{student.email}</td>
                    <td className="text-right">
                      <button
                        className="action-link"
                        onClick={() => {
                          setSelectedStudent(student);
                          setIsModalOpen(true);
                        }}
                      >
                        <img
                          src={ViewIcon}
                          className="view-img"
                          alt="View response"
                        />
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            /* --- PENDING VERIFICATION TABLE --- */
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Grade & Section</th>
                  <th>Student Number (LRN) </th>
                  <th>Request Date</th>
                  <th>Email</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingStudents.map((student) => (
                  <tr key={student.id}>
                    <td className="student-name-cell">{student.name}</td>
                    <td className="grade-section-cell">
                      Grade {student.grade} — {student.section}
                    </td>
                    <td>{student.lrn}</td>
                    <td className="date-cell">{student.date}</td>
                    <td>{student.email}</td>
                    <td className="text-right">
                      <button className="approve-btn">Approve</button>
                      <button className="reject-btn">Decline</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal for showing responses */}
      {isModalOpen && selectedStudent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ViewResponse
              studentName={selectedStudent.name}
              grade={`Grade ${selectedStudent.grade}`}
              section={selectedStudent.section}
              allResponses={selectedStudent.data}
              onExit={handleCloseModal}
            />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default TeacherDashboard;
