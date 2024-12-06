import React, { useState } from 'react';
import './CardDetailsPage.css';

const CardDetailsPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, such as saving the card details or proceeding to payment
    alert('Card details submitted!');
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
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default CardDetailsPage;
