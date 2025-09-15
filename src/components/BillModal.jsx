// src/components/BillModal.jsx
import React, { useState } from "react";
import { FaCreditCard, FaMoneyBillWave, FaQrcode } from "react-icons/fa";
import "./Modal.css"; // Re-use common modal styles
import "./BillModal.css"; // Specific bill styles

const BillModal = ({
  isOpen,
  onClose,
  cartItems,
  getTotalPrice,
  restaurantName,
}) => {
  const [showUpiQr, setShowUpiQr] = useState(false);
  const taxRate = 0.05; // 5% tax rate
  const subtotal = getTotalPrice();
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  if (!isOpen) return null;

  const handleUpiClick = () => {
    setShowUpiQr(true);
  };

  const dummyUpiData = `upi://pay?pa=dummyupi@bank&pn=Spice&am=Rs. {total.toFixed(
    2
  )}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    dummyUpiData
  )}`;

  return (
    <div className="modal-backdrop animate-fade-in">
      <button className="overlay" onClick={onClose}></button>
      <div className="modal-content animate-slide-down">
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="bill-header">
          <h2>Bill for {restaurantName}</h2>
          <p>Date: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="bill-items">
          <h3>Items:</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="bill-item">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>Rs. {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bill-summary">
          <p>
            Subtotal: <span>Rs. {subtotal}</span>
          </p>
          <p>
            Tax ({taxRate * 100}%): <span>Rs. {tax}</span>
          </p>
          <p className="bill-total">
            Total: <span>Rs. {total}</span>
          </p>
        </div>
        <div className="payment-options">
          <h3>Payment Options:</h3>
          <div className="payment-buttons">
            <button
              className="payment-btn animate-pop"
              onClick={() => alert("Payment via Cash is selected.")}
            >
              <FaMoneyBillWave /> Cash
            </button>
            <button
              className="payment-btn animate-pop"
              onClick={() => alert("Payment via Card is selected.")}
            >
              <FaCreditCard /> Card
            </button>
            <button
              className="payment-btn animate-pop"
              onClick={handleUpiClick}
            >
              <FaQrcode /> UPI
            </button>
          </div>
          {showUpiQr && (
            <div className="upi-qr-code animate-fade-in">
              <p>Scan the QR code to pay with UPI:</p>
              <img src={qrCodeUrl} alt="UPI QR Code" />
            </div>
          )}
        </div>
        <div className="bill-footer">
          <p>
            Thank you for choosing Spice & Sizzle Bistro! We hope to serve you
            again soon. ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default BillModal;
