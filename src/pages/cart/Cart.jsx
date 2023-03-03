import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "../cart/CartItem";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <section className="cart">
      <section>
        <h1>Your cart items</h1>
      </section>
      <section className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </section>
      {totalAmount > 0 ? (
        <section className="checkout">
          <p>SubTotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shoppping</button>
          <button>Checkout</button>
        </section>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </section>
  );
};
