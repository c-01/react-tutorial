import React, { useContext } from "react";
import { DepartmentContext } from "../ContextApi/DepartmentContext";

export default function Categories(watch) {
  console.log(watch.match.params.slug);
  const slug = watch.match.params.slug;
  
  const [items, setItems] = useContext(DepartmentContext);

  const phones = items.filter(department => department.slug === slug);

  const cates = [];
  let title;

  phones.map((value, index) => {
    title = value.name;
    cates.push(...value.cate);
  });

  
  return (
    <div className="Shop-main">
      <h1>{title} components</h1>
      {cates.map(phone => (
        <p key={phone.name}>{phone.name}</p>
      ))}
    </div>
  );
}
