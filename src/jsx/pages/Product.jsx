import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetailInfo from '../components/ui/product/ProductDetailInfo';
import ProductExtraInfo from '../components/ui/product/ProductExtraInfo';
import ProductHeader from '../components/ui/product/ProductHeader';
import Review from '../components/ui/Review';
import ProductBottomButton from '../components/ui/product/ProductBottomButton';
import { useParams } from 'react-router-dom';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Server from "../../datas/Server.js";
import HeaderTop from '../components/ui/HeaderTop';

function Product() {
   const [productData, setProductData] = useState();
   const [likeCheck, setLikeCheck] = useState(false);

   const pathname = useParams();

   useEffect(()=>{

      const url = `${Server.baseUrl}api/pdtBoard/detail/${pathname.productId}`;
      const token = sessionStorage.getItem("login");
      const config = {timeout:1000, headers:{authentication: token}}
      
      axios.get(url, config)
      .then(Response => {
         console.log(Response.data);
         setProductData(Response.data.data);
      })
      .catch(error => {
         console.log(error)
      })
   }, [likeCheck])

   console.log("패스네임")
   console.log(pathname)
   console.log("프로덕트데이타")
   console.log(productData);

    return ( 
      <div className='Product'>
         <HeaderTop />
         {
            productData &&
               <div>
                  <ProductHeader productData = {productData} />
                  <ProductDetailInfo productData = {productData} />
                  <Review />
                  <ProductExtraInfo />
                  <ProductBottomButton 
                     boardId = {pathname.productId}
                     option1List = {productData.option1List} 
                     optionName1 = {productData.optionName1}
                     optionName2 = {productData.optionName2}
                     productData = {productData} 
                     LikeCheckState = {likeCheck} 
                     setLikeCheckState = {setLikeCheck}
                  />
                  <Footer />
               </div>
         }
      </div>
   );
}

export default Product;