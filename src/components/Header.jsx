// src/components/Header.jsx
import { Link } from "react-router-dom";
import "./Header.css"; // For styling and animations

const Header = ({ restaurantName, totalCartItems, onCartClick }) => {
  return (
    <header className="header animate-fade-in">
      <div className="container">
        <Link to="/" className="logo-link">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Spice & Sizzle Bistro Logo"
            className="logo-img"
          />
          <span className="restaurant-name">{restaurantName}</span>
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
          {/* Add more links if needed */}
          <button className="cart-icon-btn animate-pop" onClick={onCartClick}>
            🛒{" "}
            {totalCartItems > 0 && (
              <span className="cart-count">{totalCartItems}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
