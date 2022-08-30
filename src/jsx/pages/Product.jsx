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
import Server from "../../datas/Server.json";

function Product() {
   const [productData, setProductData] = useState();
   const [likeCheck, setLikeCheck] = useState(false);

   const pathname = useParams();
   console.log(pathname.productId)

   useEffect(()=>{
      console.log(pathname)

      const url = `${Server.baseUrl}api/pdtBoard/detail/${pathname.productId}`;
      axios.get(url)
      .then(Response => {
         console.log(Response.data);
         setProductData(Response.data.data);
      })
      .catch(error => {
         console.log(error)
      })
   }, [likeCheck])

    return ( 
      <>
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
                  />
                  <Footer />
               </div>
                  // <ProductBottomButton productData = {productData} LikeCheckState = {likeCheck} setLikeCheckState = {setLikeCheck}/>
//             </div>
// >>>>>>> main
         }
      </>
   );
}

export default Product;