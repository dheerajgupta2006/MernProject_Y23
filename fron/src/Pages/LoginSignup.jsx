import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  // State for form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (!agree) {
      setError('You must agree to the terms and conditions');
      return;
    }

    try {
      // Make the API request to register the user
      const response = await axios.post('http://localhost:5000/api/users/login', {
        name,
        email,
        password,
      });

      // Handle successful registration
      alert('Registration successful!');
      console.log('User registered:', response.data);
    } catch (err) {
      setError('Error registering user: ' + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignUp-container'>
        <h1>Sign Up</h1>
        
        {/* Show error message */}
        {error && <p className="error">{error}</p>}

        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit}>Continue</button>

        <p className='loginsignup-login'>
          Already have an account? <span>Login here</span>
        </p>

        <div className="loginsignup-agree">
          <input
            type='checkbox'
            id='agree'
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
