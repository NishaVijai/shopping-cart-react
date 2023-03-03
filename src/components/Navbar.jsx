import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

import "./navbar.css";

export const Navbar = () => {
  return (
    <section className="navbar">
      <section className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </section>
    </section>
  );
};
