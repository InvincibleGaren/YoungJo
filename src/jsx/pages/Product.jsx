import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetailInfo from '../components/ui/product/ProductDetailInfo';
import ProductExtraInfo from '../components/ui/product/ProductExtraInfo';
import ProductHeader from '../components/ui/product/ProductHeader';
import Review from '../components/ui/Review';
import ProductBottomButton from '../components/ui/product/ProductBottomButton';
import { useParams } from 'react-router-dom';
import Footer from '../layouts/Footer';
import HeaderTop from '../components/ui/HeaderTop';
import Server from "../../datas/Server.js";
import BackButton from '../components/ui/BackButton';

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
         console.log(Response.data.data);
         setProductData(Response.data.data);
      })
      .catch(error => {
         console.log(error)
      })
   }, [likeCheck])

   console.log("패스네임");
   console.log(pathname);
   console.log("프로덕트데이터");
   console.log(productData);

    return ( 
      <div className='mcom_wrap sm_v3 sm_page_main has_smhero_banner Product'>
         <HeaderTop />
         <BackButton />
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
               </div>
         }
         <Footer />
      </div>
   );
}

export default Product;