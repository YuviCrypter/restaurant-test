// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useCart from "./hooks/useCart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import OrderPlacedModal from "./components/OrderPlacedModal";
import BillModal from "./components/BillModal";
import Spinner from "./components/Spinner";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

import "./App.css"; // Global styles and animations

function App() {
  const {
    cartItems,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const [restaurantData, setRestaurantData] = useState(null);
  const [loadingData, setLoadingData] = useState(true);
  const [errorData, setErrorData] = useState(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderPlacedModalOpen, setIsOrderPlacedModalOpen] = useState(false);
  const [isBillModalOpen, setIsBillModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load restaurant data.");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurantData(data);
        setLoadingData(false);
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
        setErrorData(error);
        setLoadingData(false);
      });
  }, []);

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add some delicious items first.");
      return;
    }
    setIsCartOpen(false);
    setIsOrderPlacedModalOpen(true);
    // You might want to clear cart here, or after generating the bill
    // For now, let's keep items in cart until bill is handled
  };

  const handleMakeBill = () => {
    setIsOrderPlacedModalOpen(false);
    setIsBillModalOpen(true);
  };

  const handleBillClose = () => {
    setIsBillModalOpen(false);
    clearCart(); // Clear cart after bill is closed
  };

  if (loadingData) {
    return <Spinner message="Preparing the finest ingredients..." />;
  }

  if (errorData) {
    return (
      <div className="error-message">
        Error: {errorData.message} Please try again later.
      </div>
    );
  }

  return (
    <Router basename={import.meta.env.BASE_URL}>
      {" "}
      {/* For GitHub Pages */}
      <Header
        restaurantName={restaurantData.restaurantName}
        totalCartItems={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      <div className="header-placeholder"></div>
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home restaurantData={restaurantData} onAddToCart={addToCart} />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                menuItems={restaurantData.menu}
                categories={restaurantData.categories}
                onAddToCart={addToCart}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer restaurantData={restaurantData} />
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateCartQuantity={updateCartQuantity}
        removeFromCart={removeFromCart}
        getTotalPrice={getTotalPrice}
        onPlaceOrder={handlePlaceOrder}
      />
      <OrderPlacedModal
        isOpen={isOrderPlacedModalOpen}
        onClose={() => setIsOrderPlacedModalOpen(false)}
        onMakeBillClick={handleMakeBill}
      />
      <BillModal
        isOpen={isBillModalOpen}
        onClose={handleBillClose}
        cartItems={cartItems}
        getTotalPrice={getTotalPrice}
        restaurantName={restaurantData.restaurantName}
      />
    </Router>
  );
}

export default App;
