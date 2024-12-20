import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import { FaSearch, FaShoppingCart, FaCartPlus, FaComments, FaEnvelope } from "react-icons/fa";
import { toast } from 'react-toastify';
import "./ProductInfo.css";

const ProductInfo = () => {

  const { product_slug, fetchProductSlug, url, cartItems, addQuantityToCart, addToCart, removeFromCart } = useContext(StoreContext);
  const { productSlug } = useParams();
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleAddQuantityToCart = (id, quantity) => {
    addQuantityToCart(id, quantity)
    toast.success('Added to Cart!');
  };


  useEffect(() => {
    if (productSlug) {
      fetchProductSlug(productSlug);

    }
  }, [productSlug]);

  useEffect(() => {
    if (product_slug && product_slug.images && product_slug.images.length > 0) {
      setMainImage(product_slug.images[0]);
      setSelectedThumbnail(product_slug.images[0]);

    }
  }, [product_slug]);


  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleQuantityChange = (event) => {
    let newQuantity = event.target.value;

    // Đảm bảo giá trị nhập vào là một số hợp lệ
    if (newQuantity === "" || isNaN(newQuantity)) {
      setQuantity(""); // Để trống nếu không phải số
    } else {
      newQuantity = parseInt(newQuantity, 10);

      // Giới hạn giá trị số lượng không vượt quá giới hạn min/max
      if (newQuantity >= 1 && newQuantity <= product_slug.quantity) {
        setQuantity(newQuantity);
      }
    }
    // >>>>>>> featureTuoi
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
    setSelectedThumbnail(image);
  };

  const togglePopup = () => setShowPopup(!showPopup);

  if (!product_slug) return <div>Sản phẩm không tồn tại</div>;

  return (
    <div className="product-info-tab-container">
      {/* ProductInfo Section */}
      <div className="productinfo-container">
        <div className="productinfo-images">
          <div className="productinfo-main-image">
            <img src={`${url}/images/${mainImage}`} alt={product_slug.nameProduct} />
            <div className="productinfo-zoom-icon" onClick={togglePopup}>
              <FaSearch size={22} color="black" />
            </div>
          </div>
          <div className="productinfo-thumbnail-images">
            {product_slug.images.map((image, index) => (
              <img
                key={index}
                src={`${url}/images/${image}`}
                alt={`Thumbnail ${index + 1}`}
                className={`productinfo-thumbnail ${selectedThumbnail === image ? "selected" : ""}`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
        </div>

        <div className="productinfo-details">
          <h1 className="productinfo-name">{product_slug.nameProduct}</h1>
          <p className="productinfo-price">
            {product_slug.price ? `${product_slug.price.toLocaleString()}đ` : "LIÊN HỆ VỚI SHOP"}
          </p>

          <div className="productinfo-description">
            <h3>Tại sao bạn nên chọn: <br />{`"${product_slug.nameProduct}"`} của SIEGENX</h3>
            <ul>
              {product_slug.description ? (
                <li>{product_slug.description}</li>
              ) : (
                <li>No description available</li>
              )}
            </ul>
          </div>

          <div className="productinfo-quantity">
            <label htmlFor="quantity">Số lượng:</label>

            <div className="quantity-control">
              <button type="button" onClick={() => handleQuantityChange({ target: { value: quantity - 1 } })} disabled={quantity <= 1}>-</button>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product_slug.quantity}
                step="1"
              />
              <button type="button" onClick={() => handleQuantityChange({ target: { value: quantity + 1 } })} disabled={quantity >= product_slug.quantity}>+</button>
            </div>

          </div>

          <button className="productinfo-buy-now">
            <FaShoppingCart className="productinfo-icon" /> MUA NGAY
          </button>

          <div className="productinfo-actions">
            <button className="productinfo-contact" onClick={() => navigate("/contact")} >
              <FaEnvelope className="productinfo-icon-contact" /> LIÊN HỆ
            </button>

            <button className="productinfo-addCart" onClick={() => handleAddQuantityToCart(product_slug._id, quantity)} >
              <FaCartPlus className="productinfo-icon-addCart" /> Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      {/* ProductTab Section */}
      <div className="product-tab-container">
        <div className="tab-header">
          <button
            className={`tab-button ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleTabClick("description")}
          >
            Mô tả
          </button>
          <button
            className={`tab-button ${activeTab === "specification" ? "active" : ""}`}
            onClick={() => handleTabClick("specification")}
          >
            Thông số kỹ thuật
          </button>
        </div>

        <div className="product-tab-content">
          {activeTab === "description" && product_slug && (
            <div className="description-section">
              <h1 className="producttab-title">{product_slug.nameProduct}</h1>
              <div className="producttab-images">
                {product_slug.images?.[0] && (
                  <img
                    src={`${url}/images/${product_slug.images[0]}`}
                    alt="Hình ảnh sản phẩm"
                    className="producttab-image"
                  />
                )}
              </div>

              <h2>I. Thông tin sản phẩm</h2>
              <p className="producttab-description">{product_slug.recap}</p>

              <h2>II. Ưu điểm sản phẩm</h2>
              <div className="producttab-images">
                {product_slug.images?.[1] && (
                  <img
                    src={`${url}/images/${product_slug.images[1]}`}
                    alt="Hình ảnh sản phẩm"
                    className="producttab-image"
                  />
                )}
              </div>
              <p className="producttab-description">{product_slug.description}</p>
              <div className="producttab-images">
                {product_slug.images?.[2] && (
                  <img
                    src={`${url}/images/${product_slug.images[2]}`}
                    alt="Hình ảnh sản phẩm"
                    className="producttab-image"
                  />
                )}
              </div>

              <h2>III. Ứng dụng</h2>
              <p className="producttab-description">{product_slug.description}</p>
            </div>
          )}

          {activeTab === "specification" && product_slug && (
            <div className="specification-section">
              <h2 className="specification-title">Thông số kỹ thuật</h2>
              <ul className="specification-list">
                <li className="spec-item">
                  <span className="spec-label">Bo mạch chủ:</span>
                  <span className="spec-value">{product_slug.mainBoard}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Chip:</span>
                  <span className="spec-value">{product_slug.chip}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">CPU:</span>
                  <span className="spec-value">{product_slug.cpu}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">GPU:</span>
                  <span className="spec-value">{product_slug.gpu}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">RAM:</span>
                  <span className="spec-value">{product_slug.ram}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Bộ nhớ:</span>
                  <span className="spec-value">{product_slug.memory}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Phiên bản:</span>
                  <span className="spec-value">{product_slug.version}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Cổng kết nối:</span>
                  <span className="spec-value">{product_slug.ports}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Kích thước màn hình:</span>
                  <span className="spec-value">{product_slug.displaySize}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Mật độ điểm ảnh:</span>
                  <span className="spec-value">{product_slug.pixelDensity}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Màn hình:</span>
                  <span className="spec-value">{product_slug.display}</span>
                </li>
                <li className="spec-item">
                  <span className="spec-label">Tần số quét:</span>
                  <span className="spec-value">{product_slug.refreshRate}</span>
                </li>
              </ul>
            </div>
          )}

        </div>
      </div>


      {/* Popup Image Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={`${url}/images/${mainImage}`} alt={product_slug.nameProduct} className="popup-image" />
            {/* >>>>>>> featureTuoi */}
            <button className="popup-close" onClick={togglePopup}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
