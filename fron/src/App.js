import './App.css'; // Global CSS
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import CheckoutPage from './Pages/CheckoutPage'; // Import the Checkout Page
import CardDetailsPage from './Pages/CardDetailsPage'; // Import the Card Details Page
import PaymentDonePage from './Pages/PaymentDonePage'; // Import the Payment Done Page

// Import CSS files for the pages
import './Pages/CheckoutPage.css'; // Import CSS for CheckoutPage
import './Pages/CardDetailsPage.css'; // Import CSS for CardDetailsPage
import './Pages/PaymentDonePage.css'; // Updated path for PaymentDonePage.css

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seeds" element={<ShopCategory category="seeds" />} />
          <Route path="/fertilizers" element={<ShopCategory category="fertilizers" />} />
          <Route path="/irrigation" element={<ShopCategory category="irrigation" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* Checkout page */}
          <Route path="/card-details" element={<CardDetailsPage />} /> {/* Card Details page */}
          <Route path="/payment-success" element={<PaymentDonePage />} /> {/* Payment Done page */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
