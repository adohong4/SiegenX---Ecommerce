import React, { useState } from "react";
import "./Provide.css";
import { assets } from "../../../assets/assets";
const Provide = () => {
  const [selectedOption, setSelectedOption] = useState(2);

  const options = [
    {
      title: "Màn hình tương tác",
      description: "Biển hiệu tại trung tâm mua sắm rất đa dạng. Bao gồm các biển cửa hàng, biển chỉ hướng, biển hướng dẫn đến các phòng ban khác nhau. \n\nCác biển hiệu không chỉ đóng vai trò là hình ảnh nhận diện cho thương hiệu mà còn là sự thể hiện đầy màu sắc của các...",
      image: assets.interactiveScreen
    },
    {
      title: "Màn hình di động",
      description: "Biển hiệu tại trung tâm mua sắm rất đa dạng. Bao gồm các biển cửa hàng, biển chỉ hướng, biển hướng dẫn đến các phòng ban khác nhau. \n\nCác biển hiệu không chỉ đóng vai trò là hình ảnh nhận diện cho thương hiệu mà còn là sự thể hiện đầy màu sắc của các...",
      image: assets.mobileScreen
    },
    {
      title: "Màn hình quảng cáo",
      description: "Biển hiệu tại trung tâm mua sắm rất đa dạng. Bao gồm các biển cửa hàng, biển chỉ hướng, biển hướng dẫn đến các phòng ban khác nhau. \n\nCác biển hiệu không chỉ đóng vai trò là hình ảnh nhận diện cho thương hiệu mà còn là sự thể hiện đầy màu sắc của các...",
      image: assets.advertisingScreen
    },
    {
      title: "Màn hình LED",
      description: "Biển hiệu tại trung tâm mua sắm rất đa dạng. Bao gồm các biển cửa hàng, biển chỉ hướng, biển hướng dẫn đến các phòng ban khác nhau. \n\nCác biển hiệu không chỉ đóng vai trò là hình ảnh nhận diện cho thương hiệu mà còn là sự thể hiện đầy màu sắc của các...",
      image: assets.ledScreen
    },
    {
      title: "Màn hình ghép",
      description: "Biển hiệu tại trung tâm mua sắm rất đa dạng. Bao gồm các biển cửa hàng, biển chỉ hướng, biển hướng dẫn đến các phòng ban khác nhau. \n\nCác biển hiệu không chỉ đóng vai trò là hình ảnh nhận diện cho thương hiệu mà còn là sự thể hiện đầy màu sắc của các...",
      image: assets.videoWallScreen
    },
  ];

  const handleOptionClick = (index) => setSelectedOption(index);

  return (
    <div className="provide-container">
      {/* Danh sách lựa chọn */}
      <div className="column column-options">
        <h2 className="title">CHÚNG TÔI CUNG CẤP CHO BẠN</h2>
        <p className="subtitle">CÁC GIẢI PHÁP HIỂN THỊ, ÂM THANH TOÀN DIỆN</p>
        <ul className="option-list">
          {options.map((option, index) => (
            <li
              key={index}
              className={`option ${selectedOption === index ? "active" : ""}`}
              onClick={() => handleOptionClick(index)}
            >
              <span className="option-number">{`0${index + 1}`}</span>
              <span className="option-text">{option.title}</span>
              {selectedOption === index && <span className="arrow">→</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Nội dung hiển thị */}
      <div className="column-content">
        <div className="content-image">
          <img
           className="image-preview"
            src={options[selectedOption].image}
            alt={options[selectedOption].title}
          />
        </div>
        <div className="content-description">
          <p>{options[selectedOption].description}</p>
          <button className="details-button">XEM CHI TIẾT</button>
        </div>
      </div>
    </div>
  );
};

export default Provide;
