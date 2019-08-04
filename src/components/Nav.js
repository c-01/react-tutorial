import React, { useContext } from "react";
import "../App.css";

import { Link } from "react-router-dom";
import { DepartmentContext } from "../ContextApi/DepartmentContext";

export default function Nav() {
  const [items, setItems] = useContext(DepartmentContext);

  const Departments = items.map((gallery, i) => {
    return (
      <li key={i}>
        <Link to={"/departments/" + gallery.name.toLowerCase()}>{gallery.name}</Link>
      </li>
    );
  });

  return (
    <nav className="Nav-main">
      <h2>
        <Link to="/">HomePage</Link>
      </h2>
      <ul>{Departments}</ul>
    </nav>
  );
}
