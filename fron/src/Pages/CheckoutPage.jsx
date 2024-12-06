import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code'; // Import react-qr-code
import './CheckoutPage.css';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [qrCodeGenerated, setQrCodeGenerated] = useState(false); // Track if QR code is generated

  const handleCardPayment = () => {
    navigate('/card-details');
  };

  const generateQRCode = () => {
    setQrCodeGenerated(true); // Set to true to show the QR code
  };

  return (
    <div className="checkout-page">
      <div className="checkout-details">
        <h2>Checkout</h2>
        <p>Review your items and proceed to payment.</p>

        {/* Generate QR Code Button */}
        <button className="generate-qr-button" onClick={generateQRCode}>
          Generate QR Code
        </button>

        {/* Display QR Code if generated */}
        {qrCodeGenerated && (
          <div className="qr-code-container">
            <QRCode value="https://www.your-payment-link.com" /> {/* Replace with your payment link */}
          </div>
        )}

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
