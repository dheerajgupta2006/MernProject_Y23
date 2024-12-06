import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    const navigate = useNavigate(); // Hook for redirecting

    const handleProceedToCheckout = () => {
        navigate('/checkout'); // Redirect to checkout page
    };

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format">
                                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                <img 
                                  src={remove_icon} 
                                  onClick={() => { removeFromCart(e.id) }} 
                                  alt="Remove" 
                                  className='remove-icon' 
                                />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button className='checkout-button' onClick={handleProceedToCheckout}>PROCEED TO CHECKOUT</button>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <input type="text" placeholder='Promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;