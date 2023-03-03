import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../shop/Product";

import "./shop.css";

export const Shop = () => {
  return (
    <secion className="shop">
      <section className="shopTitle">
        <h1>Shop Page</h1>
      </section>
      <section className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </section>
    </secion>
  );
};
