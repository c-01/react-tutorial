import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="Nav-main">
      <h2><Link to="/">HomePage</Link></h2>
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
