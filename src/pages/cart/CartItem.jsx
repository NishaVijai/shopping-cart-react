import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage, productImageAlt } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount
  } = useContext(ShopContext);

  return (
    <section className="cartItem">
      <img src={productImage} alt={productImageAlt} />
      <section className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <section className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </section>
      </section>
    </section>
  );
};
