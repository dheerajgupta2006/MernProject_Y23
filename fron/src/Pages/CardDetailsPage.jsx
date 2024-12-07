import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CardDetailsPage.css';

const CardDetailsPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic
    if (cardNumber.length === 16 && cvv.length === 3 && expiryDate.match(/^\d{2}\/\d{2}$/)) {
      navigate('/payment-success'); // Redirect to success page
    } else {
      alert('Please enter valid card details.');
    }
  };

  return (
    <div className="card-details-page">
      <h2>Enter Your Card Details</h2>
      <form onSubmit={handleSubmit} className="card-details-form">
        <div className="form-group">
          <label>Card Number</label>
          <input
            type="text"
            maxLength="16"
            placeholder="Enter 16-digit card number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV</label>
          <input
            type="text"
            maxLength="3"
            placeholder="Enter CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date</label>
          <input
            type="text"
            maxLength="5"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CardDetailsPage;
