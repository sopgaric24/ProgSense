import React, { useState } from 'react';
import '../css/OpenEndedQuestion.css';

const OpenEndedQuestion = ({ question, placeholder = "Type your answer here...", onUpdate }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    if (onUpdate) onUpdate(value);
  };

  return (
    <div className="ps-open-container">
      <p className="ps-open-question">{question}</p>
      <textarea
        className="ps-open-textarea"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        rows={5}
      />
    </div>
  );
};

export default OpenEndedQuestion;