// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"; // For styling and animations

const Footer = ({ restaurantData }) => {
  if (!restaurantData) return null;

  const { restaurantName, contact, socialMedia } = restaurantData;

  return (
    <footer className="footer animate-fade-in-up">
      <div className="container footer-content">
        <div className="footer-section about-section">
          <h3>{restaurantName}</h3>
          <p>Where every bite tells a story!</p>
        </div>
        <div className="footer-section contact-section">
          <h3>Contact Us</h3>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <p>Address: {contact.address}</p>
        </div>
        <div className="footer-section social-media-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href={socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href={socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
            <a
              href={socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {restaurantName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
