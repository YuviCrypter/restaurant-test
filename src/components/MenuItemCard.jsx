// src/components/MenuItemCard.jsx
import { FaStar, FaFire, FaCartPlus } from "react-icons/fa"; // Install react-icons
import "./MenuItemCard.css"; // For styling and animations

const MenuItemCard = ({ item, onAddToCart }) => {
  const {
    id,
    name,
    description,
    price,
    rating,
    serves,
    isSpicy,
    isMustTry,
    imageUrl,
  } = item;

  return (
    <div className="menu-item-card animate-slide-up">
      <img
        src={imageUrl || "/assets/default-food.jpg"}
        alt={name}
        className="item-image"
      />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-description">{description}</p>
        <div className="item-meta">
          <span className="item-rating">
            <FaStar /> {rating}
          </span>
          <span>Serves: {serves}</span>
          {isSpicy && (
            <span className="item-tag spicy">
              <FaFire /> Spicy
            </span>
          )}
          {isMustTry && <span className="item-tag must-try">⭐ Must Try</span>}
        </div>
        <div className="item-actions">
          <span className="item-price">Rs. {price}</span>
          <button
            className="add-to-cart-btn animate-pulse"
            onClick={() => onAddToCart(item)}
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
