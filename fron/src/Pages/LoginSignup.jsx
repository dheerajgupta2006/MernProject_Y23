import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure that you use react-router-dom to navigate
import './CSS/LoginSignup.css';
import dummyData from '../data/dummyData.json'; // Import the dummy data from the JSON file

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to another page

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password match a user in the dummy data
    const user = dummyData.users.find(user => user.email === email && user.password === password);

    if (user) {
      // If login is successful, store user data and token in localStorage
      const userData = { email, token: 'dummy-token' }; // Replace 'dummy-token' with a real token after backend implementation
      localStorage.setItem('userData', JSON.stringify(userData)); // Store user data in localStorage

      // Redirect user to the dashboard or another protected page
      navigate('/dashboard'); // Replace '/dashboard' with your actual redirect path
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignUp-container">
        <h1>Login</h1>

        {/* Display error message if there's an issue */}
        {error && <p className="error">{error}</p>}

        <div className="loginsignup-fields">
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
        </div>

        <button onClick={handleSubmit}>Login</button>

        <p className="loginsignup-login">
          Don't have an account? <span>Sign up here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
