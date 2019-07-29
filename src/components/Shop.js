import React, { useEffect, useState } from "react";

export default function Shop() {
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const data = await fetch("http://127.0.0.1:8000/api/departments");

    const items = await data.json();
    console.log(items);
    //return data;
  };

  return <div className="Shop-main">Shop Components</div>;
}
