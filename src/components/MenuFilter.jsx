// src/components/MenuFilter.jsx
import React, { useState } from "react";
import "./MenuFilter.css"; // For styling and animations

const MenuFilter = ({ categories, onCategoryChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="menu-filter-bar animate-fade-in">
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className="filter-btn animate-hover-scale"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input animate-focus-glow"
        />
      </div>
    </div>
  );
};

export default MenuFilter;
