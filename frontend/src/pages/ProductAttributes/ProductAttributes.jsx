import React from "react";
import { useParams } from "react-router-dom";
import './ProductAttributes.css';
import Notification from "../../components/Notification/Notification";
import ProductInfo from "../../components/Products/ProductInfo/ProductInfo";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
const ProductsAttributes = () => {
    const { productSlug } = useParams();

    return (
        <main>
            <div className='container-home'>
                <ScrollToTop />
                <Notification />
                <ProductInfo producSlug={productSlug} />
            </div>
        </main>
    );
};

export default ProductsAttributes;
