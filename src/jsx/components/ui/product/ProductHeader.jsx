import React from 'react'
import ProductSlider from '../../widgets/ProductSlider';
import ProductDelivery from './ProductDelivery';
import ProductInfo from './ProductInfo';
import ProductPaymentBenefit from './ProductPaymentBenefit';

function ProductHeader({productData}) {
    console.log(productData)
    return (
        <div>
            <ProductSlider thumbImgList = {productData.thumbImgList} />
            <ProductInfo productData = {productData} />
            <div className="mndtl_info_item">
                <ProductPaymentBenefit />
                <ProductDelivery productData = {productData} />
            </div>
        </div>
    );
}

export default ProductHeader;