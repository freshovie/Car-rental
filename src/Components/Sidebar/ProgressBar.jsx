import React from 'react';
import './sidebar.scss';

const ProgressBar = ({ progress, label }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {label && <span className="progress-bar-label">{progress}%</span>}
      </div>
    </div>
  );
};

export default ProgressBar;
