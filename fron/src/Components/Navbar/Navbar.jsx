import React, { useState, useContext } from 'react';
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  // Check if the user is logged in by checking localStorage
  const isLoggedIn = localStorage.getItem('userData');

  // Handle logout functionality
  const handleLogout = () => {
    localStorage.removeItem('userData'); // Remove user data from localStorage
    window.location.reload(); // Reload the page to reflect the change
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo-design" src="https://media.istockphoto.com/id/866393210/vector/farm-icon.jpg?s=612x612&w=0&k=20&c=CZnGt4ER-NjDGJJMzyYaGEz3ko9BoYnuf2vNRp-cMfc=" alt="AgroStop Logo" />
        <p>AgroStop</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("seeds")}>
          <Link style={{ textDecoration: 'none' }} to='/seeds'>Seeds</Link>
          {menu === "seeds" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("fertilizers")}>
          <Link style={{ textDecoration: 'none' }} to='/fertilizers'>Fertilizers</Link>
          {menu === "fertilizers" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("irrigation")}>
          <Link style={{ textDecoration: 'none' }} to='/irrigation'>Irrigation</Link>
          {menu === "irrigation" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Chatbot")}>
          <Link style={{ textDecoration: 'none' }} to='/Chatbot'>CHAT BOT</Link>
          {menu === "Chatbot" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {/* If user is logged in, show Logout button */}
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}

        <Link to='/cart'>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
