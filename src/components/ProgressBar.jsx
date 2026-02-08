import React from 'react';
import '../css/ProgressBar.css';

const ProgressBar = ({ currentStep = 1 }) => {
  const totalSteps = 4;

  return (
    <div className="progress-container">
      <div className="progress-bars">
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`bar ${index < currentStep ? 'active' : 'inactive'}`}
          />
        ))}
      </div>
      <p className="step-text">Step {currentStep} of {totalSteps}</p>
    </div>
  );
};

export default ProgressBar;