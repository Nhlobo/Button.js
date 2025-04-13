import React from 'react';
import { useHistory } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const history = useHistory();
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const user = JSON.parse(localStorage.getItem("user"));

  const handleCheckout = () => {
    const orderDetails = {
      items: cart.map(item => ({ id: item.id, name: item.name, quantity: item.qty })),
      total: cart.reduce((total, item) => total + item.price * item.qty, 0),
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };

    // Redirect to FastPay for payment
    window.location.href = `https://fastpay.com/pay?order=${JSON.stringify(orderDetails)}`;
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className="order-item">
            <h3>{item.name}</h3>
            <p>Quantity: {item.qty}</p>
            <p>Price: R{item.price * item.qty}</p>
          </div>
        ))}
        <p>Total: R{cart.reduce((total, item) => total + item.price * item.qty, 0)}</p>
      </div>
      <button className="btn" onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;
