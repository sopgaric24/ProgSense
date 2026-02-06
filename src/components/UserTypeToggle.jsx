import React, { useState, useEffect } from 'react';
import '../css/UserTypeToggle.css';

const UserTypeToggle = ({ mode, onChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Define options based on mode
  const options = mode === 'login' 
    ? ['Student', 'Teacher', 'Admin'] 
    : ['Student', 'Teacher'];

  // Reset index when switching modes to prevent "Admin" being selected in Register
  useEffect(() => {
    setActiveIndex(0);
    onChange(options[0]);
  }, [mode]);

  const handleSelect = (index) => {
    setActiveIndex(index);
    onChange(options[index]);
  };

  return (
    <div className="select-usertype">
      <div 
        className="slider-pill" 
        style={{ 
          transform: `translateX(${activeIndex * 100}%)`,
          width: `${100 / options.length}%` 
        }}
      />
      {options.map((opt, i) => (
        <button
          key={opt}
          type="button"
          className={`user-btn ${activeIndex === i ? 'active' : ''}`}
          onClick={() => handleSelect(i)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
};

export default UserTypeToggle;