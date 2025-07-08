import React from 'react';
import './PrimaryButton.css';

function PrimaryButton({ text = 'Button' }) {
  return (
    <button className="primary-button">
      {text}
    </button>
  );
}

export default PrimaryButton; 