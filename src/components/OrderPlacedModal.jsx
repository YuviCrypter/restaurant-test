// src/components/OrderPlacedModal.jsx
import { FaCheckCircle } from "react-icons/fa";
import "./Modal.css"; // Re-use common modal styles

const OrderPlacedModal = ({ isOpen, onClose, onMakeBillClick }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop animate-fade-in">
      <button className="overlay" onClick={onClose}></button>
      <div className="modal-content animate-pop">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body text-center">
          <FaCheckCircle className="order-success-icon" />
          <h2>Order Placed!</h2>
          <p>Your culinary journey begins now. Get ready for a feast!</p>
          <button
            className="cta-button primary animate-pulse"
            onClick={onMakeBillClick}
          >
            Make Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlacedModal;
