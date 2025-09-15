// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import MenuItemCard from "../components/MenuItemCard";
import "./Home.css"; // For styling and animations

const Home = ({ restaurantData, onAddToCart }) => {
  const featuredItems = restaurantData.menu
    .filter((item) => item.isMustTry)
    .slice(0, 3); // Show 3 must-try items

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section
        className="hero-section animate-fade-in-up"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/hero-bg.jpg)`,
        }}
      >
        <div className="hero-content">
          <h1 className="hero-title animate-slide-right">
            {restaurantData.restaurantName}
          </h1>
          <p className="hero-tagline animate-slide-left">
            {restaurantData.tagline}
          </p>
          <Link to="/menu" className="cta-button animate-pop">
            Explore Menu & Order!
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section animate-fade-in">
        <div className="container">
          <h2 className="section-title animate-slide-down">About Us</h2>
          <p className="about-text animate-fade-in-up">
            {restaurantData.aboutUs}
          </p>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Spice & Sizzle Logo"
            className="about-logo animate-bounce-slow"
          />
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="featured-menu-section animate-fade-in">
        <div className="container">
          <h2 className="section-title animate-slide-down">Our Specialties</h2>
          <p className="section-subtitle animate-fade-in-up">
            Experience the dishes that make us famous!
          </p>
          <div className="featured-items-grid">
            {featuredItems.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
          <div className="view-full-menu-cta animate-fade-in">
            <Link to="/menu" className="cta-button secondary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
