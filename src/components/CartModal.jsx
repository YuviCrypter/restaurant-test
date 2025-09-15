// src/components/CartModal.jsx
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import "./Modal.css"; // Common styles for all modals
import "./CartModal.css"; // Specific cart styles

const CartModal = ({
  isOpen,
  onClose,
  cartItems,
  updateCartQuantity,
  removeFromCart,
  getTotalPrice,
  onPlaceOrder,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in">
      <button className="overlay" onClick={onClose}></button>
      <div className="modal-content animate-slide-down">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Your Cart 🛒</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is feeling a bit empty. Let's fill it with deliciousness!
          </p>
        ) : (
          <>
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item-entry animate-pop-in">
                  <img
                    src={item.imageUrl || "/assets/default-food.jpg"}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>Rs. {item.price} per item</p>
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <FaMinus color="black" size={12} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateCartQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <FaPlus color="black" size={12} />
                      </button>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <FaTrash color="red" size={12} />
                      </button>
                    </div>
                  </div>
                  <span className="cart-item-total">
                    Rs. {item.price * item.quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <h3>Total: Rs. {getTotalPrice()}</h3>
              <button
                className="place-order-btn animate-pulse"
                onClick={onPlaceOrder}
              >
                Place Order! ✨
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
