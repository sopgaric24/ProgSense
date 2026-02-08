import React from "react";
import ResponseAnswer from "./ResponseAnswer";
import close from "../img/close.png";

const ViewResponse = ({ studentName, grade, section, allResponses, onExit }) => {
  return (
    <div className="form student-form view-form">
      <div className="top view-response">
        <div className="title">
          <h1>ProgSense Learning Profile: <span>{studentName}</span></h1>
          <p>
            <span className="classlevel">{grade}</span>-
            <span className="classsection">{section}</span>
          </p>
        </div>
        <button onClick={(e) => { e.preventDefault(); onExit(); }}>
          <img src={close} className="img close" alt="Close" />
        </button>
      </div>

      {allResponses.map((section, index) => (
        <React.Fragment key={index}>
          <hr className="custom-divider" />
          <h2 className="part">{section.title}</h2>
          {section.data.map((q, i) => (
            <ResponseAnswer 
              key={i}
              question={q.question} 
              answer={q.answer} 
              classname={q.classname} 
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ViewResponse;