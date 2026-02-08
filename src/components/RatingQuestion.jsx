import React, { useState } from 'react';
import '../css/RatingQuestion.css';

const RatingQuestion = ({ question, onSelect }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const ratings = [
    { value: 1, label: "Strongly Disagree" },
    { value: 2, label: "Disagree" },
    { value: 3, label: "Neutral" },
    { value: 4, label: "Agree" },
    { value: 5, label: "Strongly Agree" },
  ];

  const handleRatingClick = (val) => {
    setSelectedRating(val);
    if (onSelect) onSelect(val);
  };

  return (
    <div className="ps-rating-container">
      <p className="ps-rating-question">{question}</p>
      
      <div className="ps-rating-options">
        {ratings.map((item) => (
          <div key={item.value} className="ps-rating-item">
            <button
              type="button"
              className={`ps-rating-circle ${selectedRating === item.value ? 'selected' : ''}`}
              onClick={() => handleRatingClick(item.value)}
            >
              {item.value}
            </button>
            <span className="ps-rating-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingQuestion;