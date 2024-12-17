import React from "react";
import "./Partners.css";

const Partners = () => {
  const partners = [
    "/src/assets/banner/logoBrand2.png",
    "/src/assets/banner/logoBrand1.png",
  ];

  return (
    <section className="partners">
      <h2>ĐỐI TÁC CỦA CHÚNG TÔI</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <img src={partner} alt={`Đối tác ${index + 1}`} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
