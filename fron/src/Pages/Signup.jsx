import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Signup.css'; // Your CSS file for styling
import dummyData from '../data/dummyData.json'; // Import dummy data

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle signup form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Check if the email already exists
    const existingUser = dummyData.users.find(user => user.email === email);
    if (existingUser) {
      setError('Email already exists.');
      return;
    }

    // Simulate adding the new user to the dummy data
    const newUser = { email, password };
    dummyData.users.push(newUser);

    // Store the updated dummy data (in a real app, this would be an API call)
    console.log('User signed up:', newUser);
    
    // Redirect to login page after successful signup
    navigate('/login-signup');
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h1>Sign Up</h1>

        {/* Display error message if there's an issue */}
        {error && <p className="error">{error}</p>}

        <div className="signup-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Sign Up</button>

        <p className="signup-login">
          Already have an account? <span onClick={() => navigate('/login-signup')}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
