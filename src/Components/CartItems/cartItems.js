import React from "react"
import './cartItems.css'
import CartItem from "../CartItem/CartItem"

function cartItems() {
  return (
    <div className="CartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItem">
      <CartItem/>
      </div>
    </div>
  );
}
export default cartItems;
