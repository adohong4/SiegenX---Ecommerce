import React from "react";
import "./Menu.css";

const Menu = () => {
  const columns = [
    { title: "Màn hình LED" },
    { title: "MH tương tác" },
    { title: "Màn hình quảng cáo LCD" },
    { title: "Quảng cáo 3D (OOH)" },
    { title: "KTV 5D" },
  ];

  return (
    <div className="menu-container">
      <div className="menu-columns">
        {columns.map((column, index) => (
          <div key={index} className="menu-column">
            <div className="menu-title">{column.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
