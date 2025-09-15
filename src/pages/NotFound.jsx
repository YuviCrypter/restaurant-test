// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-page animate-fade-in">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found! 😔</h2>
        <p>
          The dish you were looking for doesn't exist. Let's get you back to the
          menu!
        </p>
        <Link to="/" className="cta-button primary animate-pop">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
