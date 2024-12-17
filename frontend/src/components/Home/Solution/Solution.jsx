import React, { useState } from "react";
import "./Solution.css";
import { assets } from "../../../assets/assets"; // Import assets của bạn

const Solution = () => {
  const [activeTab, setActiveTab] = useState("Giải pháp phòng học thông minh");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); // Cập nhật tab đang được chọn
  };

  return (
    <section className="solutions">
      <h2 className="solutions-title">GIẢI PHÁP CỦA CHÚNG TÔI</h2>
      <div className="solutions-tabs">
        <button 
          className={`solution-tab ${activeTab === "Giải pháp phòng học thông minh" ? "active" : ""}`}
          onClick={() => handleTabClick("Giải pháp phòng học thông minh")}
        >
          Giải pháp phòng học thông minh
        </button>
        <button 
          className={`solution-tab ${activeTab === "Giải pháp cho gian hàng" ? "active" : ""}`}
          onClick={() => handleTabClick("Giải pháp cho gian hàng")}
        >
          Giải pháp cho gian hàng
        </button>
        <button 
          className={`solution-tab ${activeTab === "Giải pháp phòng họp thông minh" ? "active" : ""}`}
          onClick={() => handleTabClick("Giải pháp phòng họp thông minh")}
        >
          Giải pháp phòng họp thông minh
        </button>
        <button 
          className={`solution-tab ${activeTab === "Giải pháp khác" ? "active" : ""}`}
          onClick={() => handleTabClick("Giải pháp khác")}
        >
          Giải pháp khác
        </button>
      </div>

      <div className="solutions-images">
        <div className="solution-item1">
          <img src={assets.solution1} alt="Giải pháp phòng học thông minh" className="solution-img" />
        </div>
        <div className="solution-item2">
          <img src={assets.solution2} alt="Giải pháp phòng học thông minh" className="solution-img" />
          <div className="solution-btn-container">
            <button className="solution-btn">XEM TẠI ĐÂY</button>
          </div>
        </div>
        <div className="solution-item3">
          <img src={assets.solution3} alt="Giải pháp phòng học thông minh" className="solution-img" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
