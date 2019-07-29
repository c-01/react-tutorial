import React, { useEffect, useState } from "react";
import "../App.css";

import { Link } from "react-router-dom";

export default function Nav() {
  useEffect(() => {
    fetchDepartments();
  }, []);

  const [items, setItems] = useState([]);

  const fetchDepartments = async () => {
    const _data = await fetch("http://127.0.0.1:8000/api/departments");

    const items = await _data.json();
    setItems(items.data);
    console.log(items.data);
  };

  const Departments = items.map((gallery, i) => {
    return (
      <li key={i}>
        <Link to={"/" + gallery.name.toLowerCase()}>{gallery.name}</Link>
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
