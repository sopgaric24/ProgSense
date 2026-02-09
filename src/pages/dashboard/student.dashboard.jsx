import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/dashboard/student.dashboard.css";
import ProgressBar from "../../components/ProgressBar";
import RatingQuestion from "../../components/RatingQuestion";
import YesNoQuestion from "../../components/YesNoQuestion";
import OpenEndedQuestion from "../../components/OpenEndedQuestion";
import ViewResponse from "../../components/ViewResponse";
import arrow from "../../img/right-arrow.png";
import blackarrow from "../../img/right-arrow-black.png";
import check from "../../img/check.png";
import done from "../../img/done.png";
import view from "../../img/view.png";

const StudentDashboard = ({ onLogout }) => {
  // --- ADDED LOGIC ---
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isViewResponse, setIsViewResponse] = useState(false);
  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const viewResponse = (e) => {
    e.preventDefault();
    setIsViewResponse(true);
  };

  // --- YOUR DATA ---
  const part1question = [
    { id: 1, text: "I find programming syntax difficult to understand." },
    { id: 2, text: "I struggle to follow the logic or flow of a program." },
    { id: 3, text: "Debugging errors in my code is challenging for me." },
    {
      id: 4,
      text: "I have difficulty applying programming concepts during coding activities.",
    },
  ];
  const part2question = [
    { id: 5, text: "I feel confident when writing my own code." },
    { id: 6, text: "I feel motivated to improve my programming skills." },
    { id: 7, text: "I feel anxious or nervous when doing programming tasks." },
    { id: 8, text: "I enjoy learning programming despite its difficulty." },
  ];
  const part3question = [
    { id: 9, text: "I practice coding outside of class hours." },
    {
      id: 10,
      text: "I rely on classmates, AI tools, or online sources to complete programming tasks.",
    },
    {
      id: 11,
      text: "I try to understand my mistakes after encountering errors in my code.",
    },
  ];
  const part4question = [
    {
      id: 12,
      text: "What is the most difficult part of learning programming for you?",
    },
    {
      id: 13,
      text: "How do you usually deal with difficulties or errors in programming?",
    },
    {
      id: 14,
      text: "Can you describe a situation where you struggled while doing a programming task?",
    },
    {
      id: 15,
      text: "What do you think causes these difficulties in learning programming?",
    },
    {
      id: 16,
      text: "How do programming challenges affect your motivation or interest in the subject?",
    },
    {
      id: 17,
      text: "In what ways did ProgSense help you reflect on your programming learning experience?",
    },
  ];

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

  return (
    <div className="dashboard-container">
      <Header onLogout={onLogout} usertype={"Student"} />

      {/* Logic to hide form after submission */}
      {!isSubmitted ? (
        <form className="form student-form" onSubmit={handleSubmit}>
          <h1>Self-Assessment Form</h1>
          <p>
            This assessment examines your experiences and challenges in learning
            programming. Please answer all questions honestly
          </p>

          {/* Progress bar now follows the 'step' state */}
          <ProgressBar currentStep={step} />

          {/* Part I - Only shows if step is 1 */}
          {step === 1 && (
            <div className="part1 fade-in-section">
              <h2>Personal Information</h2>
              <div className="input-group">
                <label>
                  <span>Full Name</span>
                  <input
                    type="text"
                    className="input readonly-input"
                    value="Juan Dela Cruz"
                    readOnly
                  />
                </label>
              </div>
              <div className="input-group">
                <label>
                  <span>Grade Level</span>
                  <input
                    type="text"
                    className="input readonly-input"
                    value="Grade 12"
                    readOnly
                  />
                </label>
                <label>
                  <span>Section</span>
                  <input
                    type="text"
                    className="input readonly-input"
                    value="Einstein-A"
                    readOnly
                  />
                </label>
              </div>
              <hr className="custom-divider" />
              <h2>Part I. Programming Challenges</h2>
              <p>Rate yourself on the following statements:</p>
              {part1question.map((q) => (
                <RatingQuestion key={q.id} question={q.text} />
              ))}
              <div className="btn next part1">
                <button className="btn next" onClick={handleNext}>
                  <p className="next-text">Next: Confidence & Attitude</p>
                  <img src={arrow} className="img next" alt="next" />
                </button>
              </div>
            </div>
          )}

          {/* Part II - Only shows if step is 2 */}
          {step === 2 && (
            <div className="part2 fade-in-section">
              <h2>Part II. Confidence, Motivation, and Attitude</h2>
              <p>Rate your confidence level</p>
              <hr className="custom-divider" />
              {part2question.map((q) => (
                <RatingQuestion key={q.id} question={q.text} />
              ))}
              <div className="btn next part2">
                <button className="btn back" onClick={handleBack}>
                  <img src={blackarrow} className="img back" alt="submit" />
                  <p>Back</p>
                </button>
                <button className="btn next" onClick={handleNext}>
                  <p className="next-text">Next: Learning Strategies</p>
                  <img src={arrow} className="img next" alt="next" />
                </button>
              </div>
            </div>
          )}

          {/* Part III - Only shows if step is 3 */}
          {step === 3 && (
            <div className="part3 fade-in-section">
              <h2>Part III. Learning Strategies and Support</h2>
              <p>Please answer the following Yes or No questions</p>
              {part3question.map((q) => (
                <YesNoQuestion key={q.id} question={q.text} />
              ))}
              <div className="btn next part3">
                <button className="btn back" onClick={handleBack}>
                  <img src={blackarrow} className="img back" alt="submit" />
                  <p>Back</p>
                </button>
                <button className="btn next" onClick={handleNext}>
                  <p className="next-text">Next: Final Reflection</p>
                  <img src={arrow} className="img next" alt="next" />
                </button>
              </div>
            </div>
          )}

          {/* Part IV - Only shows if step is 4 */}
          {step === 4 && (
            <div className="part4 fade-in-section">
              <h2>Part IV. Reflection and Tool Evaluation</h2>
              <p>Please answer the following questions in your own words.</p>
              {part4question.map((q) => (
                <OpenEndedQuestion key={q.id} question={q.text} />
              ))}
              <div className="btn next part4">
                <button className="btn back" onClick={handleBack}>
                  <img src={blackarrow} className="img back" alt="submit" />
                  <p>Back</p>
                </button>
                <button className="btn submit-btn" type="submit">
                  <p className="next-text submit">Submit Assessment</p>
                  <img src={check} className="img submit" alt="submit" />
                </button>
              </div>
            </div>
          )}
        </form>
      ) : (
        /* This shows after submission */
        <div
          className={`form student-form success-message ${!isViewResponse ? "shown-message" : "hidden-message"}`}
        >
          <div className="container success-message">
            <img src={done} alt="done" />
            <h1 className="submitted">Assessment Submitted!</h1>
            <p>
              Thank you for completing the assessment. Your feedback is valuable
              to us. <span className="fullname">Juan Dela Cruz</span>
            </p>
            <button className="btn show-response" onClick={viewResponse}>
              <span>View my response</span>
              <img src={view} alt="View" />
            </button>
          </div>
        </div>
      )}

      {isViewResponse && (
        <ViewResponse
          studentName="John Smith"
          grade="Grade 11"
          section="Einstein-A"
          allResponses={allResponses}
          onExit={() => setIsViewResponse(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default StudentDashboard;
