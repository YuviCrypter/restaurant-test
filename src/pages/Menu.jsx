// src/pages/Menu.jsx
import React, { useState, useEffect } from "react";
import MenuItemCard from "../components/MenuItemCard";
import MenuFilter from "../components/MenuFilter";
import Spinner from "../components/Spinner"; // A simple loading spinner
import "./Menu.css"; // For styling and animations

const Menu = ({ menuItems, categories, onAddToCart }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // Simulate loading

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setLoading(false);
      filterAndSearchItems(selectedCategory, searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [menuItems, selectedCategory, searchQuery]);

  const filterAndSearchItems = (category, search) => {
    let tempItems = [...menuItems];

    if (category !== "All") {
      tempItems = tempItems.filter((item) => item.category === category);
    }

    if (search) {
      tempItems = tempItems.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilteredItems(tempItems);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterAndSearchItems(category, searchQuery);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterAndSearchItems(selectedCategory, query);
  };

  if (loading) {
    return <Spinner message="Warming up the kitchen..." />;
  }

  return (
    <div className="menu-page animate-fade-in">
      <h1 className="page-title animate-slide-down">Our Delicious Menu! 🍽️</h1>
      <p className="page-subtitle animate-fade-in">
        Explore a world of flavors, crafted just for you.
      </p>

      <MenuFilter
        categories={categories}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />

      <div className="menu-items-grid">
        {filteredItems.length === 0 ? (
          <p className="no-items-found animate-fade-in">
            Oops! No dishes found matching your criteria. Try a different
            selection!
          </p>
        ) : (
          filteredItems.map((item) => (
            <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
          ))
        )}
      </div>
    </div>
  );
};

export default Menu;
