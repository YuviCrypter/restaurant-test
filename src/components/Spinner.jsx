// src/components/Spinner.jsx
import React from "react";
import "./Spinner.css"; // For styling

const Spinner = ({ message = "Loading..." }) => {
  return (
    <div className="spinner-container animate-fade-in">
      <div className="spinner-circle"></div>
      <p className="spinner-message">{message}</p>
    </div>
  );
};

export default Spinner;
