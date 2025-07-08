import React from "react";
import "./PrimaryButton.css";

export function PrimaryButtonBase({ text = "Button" }) {
  return (
    <div className="primary-btn-base">
      <span className="primary-btn-text">{text}</span>
    </div>
  );
}

export default function PrimaryButton({ text = "Button" }) {
  return (
    <div className="primary-btn-wrapper">
      <PrimaryButtonBase text={text} />
    </div>
  );
} 