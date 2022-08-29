import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetailInfo from '../components/ui/product/ProductDetailInfo';
import ProductExtraInfo from '../components/ui/product/ProductExtraInfo';
import ProductHeader from '../components/ui/product/ProductHeader';
import Review from '../components/ui/Review';
import ProductBottomButton from '../components/ui/product/ProductBottomButton';
import { useParams } from 'react-router-dom';
import Server from "../../datas/Server.json";

function Product() {
   const [productData, setProductData] = useState();

   const pathname = useParams();
   console.log(pathname.productId)

   useEffect(()=>{
      console.log(pathname)
      axios.get(`${Server.baseUrl}api/pdtBoard/detail/${pathname.productId}`)
      .then(Response => {
         console.log(Response.data);
         setProductData(Response.data.data);
      })
      .catch(error => {
         console.log(error)
      })
   }, [])

    return ( 
      <>
         {
            productData &&
               <div>
                  <ProductHeader productData = {productData} />
                  <ProductDetailInfo productData = {productData} />
                  <Review />
                  <ProductExtraInfo />
                  <ProductBottomButton productData = {productData} />
            </div>
         }
      </>
   );
}

export default Product;