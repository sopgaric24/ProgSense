import React, { useState } from "react";
import "../css/YesNoQuestion.css";

const YesNoQuestion = ({ question, onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
    if (onSelect) onSelect(value);
  };

  return (
    <div className="ps-yn-container">
      <p className="ps-yn-question">{question}</p>

      <div className="ps-yn-options">
        <label className="ps-yn-item">
          <input
            type="radio"
            name={question}
            hidden
            onClick={() => handleSelect("Yes")}
          />
          <div
            className={`ps-yn-circle ${selected === "Yes" ? "selected" : ""}`}
          >
            {selected === "Yes" && <div className="ps-yn-inner-dot"></div>}
          </div>
          <span className="ps-yn-label">Yes</span>
        </label>

        <label className="ps-yn-item">
          <input
            type="radio"
            name={question}
            hidden
            onClick={() => handleSelect("No")}
          />
          <div
            className={`ps-yn-circle ${selected === "No" ? "selected" : ""}`}
          >
            {selected === "No" && <div className="ps-yn-inner-dot"></div>}
          </div>
          <span className="ps-yn-label">No</span>
        </label>
      </div>
    </div>
  );
};

export default YesNoQuestion;
