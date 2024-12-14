import React, { useState } from "react";
import "./Menu.css"; 

const Menu = () => {
  const [activeColumn, setActiveColumn] = useState(null);

  const columns = [
    {
      title: "Màn hình LED",
      items: ["LED ngoài trời", "LED trong nhà", "LED hội trường"],
    },
    {
      title: "MH tương tác",
      items: ["Bảng tương tác", "Màn hình thông minh", "Giải pháp học tập"],
    },
    {
      title: "Màn hình quảng cáo LCD",
      items: [
        "Orion",
        {
          name: "LG",
          subItems: [
            { name: "Treo tường" },
            { name: "Chân đứng" },
            { name: "All-in-one chân quỳ" },
            { name: "Menu Board" },
          ],
        },
        "Panasonic",
        "Philips",
      ],
    },
    {
      title: "Quảng cáo 3D (OOH)",
      items: ["Màn hình 3D LED", "Giải pháp OOH"],
    },
    {
      title: "KTV 5D",
      items: ["Rạp 5D mini", "Thiết bị KTV"],
    },
  ];

 

  return (
    <div className="menu-container">
      <div className="menu-columns">
        {columns.map((column, index) => (
          <div
            key={index}
            className={`menu-column ${activeColumn === index ? "active" : ""}`}
            
          >
            <div className="menu-title">{column.title}</div>
            <ul className="menu-list">
              {column.items.map((item, idx) => (
                <li key={idx} className="menu-item">
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      <div className="submenu-title">
                        {item.name}
                      </div>
                      <ul className="submenu-list">
                        {item.subItems.map((subItem, subIdx) => (
                          <li key={subIdx} className="submenu-item">
                            <span className="submenu-add">{"+"}</span> 
                            {subItem.name}
                            <span className="submenu-arrow">{">"}</span> 
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
