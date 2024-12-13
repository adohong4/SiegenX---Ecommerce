import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import "./ProductInfo.css";
import { products } from "../../../data/products";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import ProductTab from '../ProductTab/ProductTab';

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const product = products.find((p) => p.id === parseInt(productId));
  const [mainImage, setMainImage] = useState(product?.images[0]?.url);
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const handleContactRedirect = () => {
    window.location.href = "/contact";
  };

  const handleQuantityChange = (event) => {
    let newQuantity = parseInt(event.target.value, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      newQuantity = 1;
    } else if (newQuantity > product.quantity) {
      newQuantity = product.quantity;
    }
    setQuantity(newQuantity);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setSelectedThumbnail(image);
  };

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="productinfo-container">
      <div className="productinfo-images">
        <div className="productinfo-main-image">
          <img src={mainImage} alt={product.nameProduct} />
          <div className="productinfo-zoom-icon" onClick={togglePopup}>
            <FaSearch size={22} color="black" />
          </div>
        </div>
        <div className="productinfo-thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image?.url}
              alt={`Thumbnail ${index + 1}`}
              className={`productinfo-thumbnail ${selectedThumbnail === image?.url ? 'selected' : ''}`}
              onClick={() => handleThumbnailClick(image?.url)}
            />
          ))}
        </div>
      </div>

      <div className="productinfo-details">
        <h1 className='productinfo-name'>{product.nameProduct}</h1>
        <p className="productinfo-price">
        {product.price ? `${product.price.toLocaleString()}đ` : "LIÊN HỆ VỚI SHOP"}
        </p>

        <div className="productinfo-description">
          <h3>Tại sao bạn nên chọn: <br />{`"${product.nameProduct}"`} của SIEGENX</h3>
          <ul>
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>

        <div className="productinfo-quantity">
          <label htmlFor="quantity">Số lượng:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max={product.quantity}
            step="1"
          />
        </div>

        <div className="productinfo-actions">
          <button className="productinfo-buy-now">
            <FaShoppingCart className="productinfo-icon" /> MUA NGAY
          </button>
          <button className="productinfo-contact" onClick={handleContactRedirect}>
            LIÊN HỆ
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={mainImage} alt={product.name} className="popup-image" />
            <button className="popup-close" onClick={togglePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
