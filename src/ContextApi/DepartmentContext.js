import React, { useState, createContext, useEffect } from "react";

export const DepartmentContext = createContext();

export const DepartmentProvider = props => {
  useEffect(() => {
    fetchDepartments();
  }, []);

  const [items, setItems] = useState([]);

  const fetchDepartments = async () => {
    const _data = await fetch("http://127.0.0.1:8000/api/departments");

    const items = await _data.json();
    setItems(items.data);
    //console.log(items);
  };

  return (
    <DepartmentContext.Provider value={[items, setItems]}>
      {props.children}
    </DepartmentContext.Provider>
  );
};
