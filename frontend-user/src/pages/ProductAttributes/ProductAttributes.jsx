import React from "react";
import { useParams } from "react-router-dom"; 
import './ProductAttributes.css';
import Notification from "../../components/Notification/Notification";
import ProductInfo from "../../components/Products/ProductInfo/ProductInfo";
import ProductTab from "../../components/Products/ProductTab/ProductTab"; 

const ProductsAttributes = () => {
    const { productId } = useParams(); 

    return (
        <main>
            <div className='container-home'>
                <Notification />
                <ProductInfo />
                <ProductTab productId={productId} /> 
            </div>
        </main>
    );
};

export default ProductsAttributes;
