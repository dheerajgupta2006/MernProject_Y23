import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();

  // Redirect to card details page
  const handleCardPayment = () => {
    navigate('/card-details');
  };

  return (
    <div className="checkout-page">
      <div className="checkout-details">
        <h2>Checkout</h2>
        <p>Review your items and proceed to payment.</p>

        {/* Generate QR Code Button */}
        <button className="generate-qr-button">Generate QR Code</button>

        {/* Payment Options */}
        <div className="payment-buttons">
          <button className="payment-button" onClick={handleCardPayment}>Pay with Credit Card</button>
          <button className="payment-button" onClick={handleCardPayment}>Pay with Debit Card</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
