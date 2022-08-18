import React from 'react';
import ProductDetail from '../components/ui/ProductDetail';
import ProductExtraInfo from '../components/ui/ProductExtraInfo';
import ProductHeader from '../components/ui/ProductHeader';
import Review from '../components/ui/Review';
import productDatas from '../../datas/ProductDatas.json'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Product() {

   const url = "http://121.145.206.143:9000/api/pdtBoard/detail/1";
   // const url = "http://121.145.206.143:9000//api/pdtBoard/detail/{boardId}";

   const [productData, setProductData] = useState(productDatas);

   useEffect(()=>{
      // axios.get(url)
      // .then(Response => {
      //    console.log(Response.data);
      //    setProductData(Response.data);
      // })
      // .catch(error => {
      //    setProductData(productDatas);
      // })
      setProductData(productDatas);
   }, [])

    return ( 
      <>
         <h1>헤더에 고정된 상품정보</h1>
         {/* <div className="mndtl_header" data-react-tarea-cd="00006_000000027">
            <div className="mndtl_lft">
               <a href="javascript:history.back();" className="mndtl_btn_back clickable" target="_parent">
                  <span className="blind">이전 페이지</span>
               </a>
            </div>
            <div className="mndtl_cntr">
               <div className="mndtl_unit_tit" aria-hidden="true">
                  <strong className="mndtl_unit_brd">자연맛남</strong>
                  <span className="mndtl_unit_name">[자연맛남] 22년 첫수확 해남 첫사랑 꿀 밤고구마 3kg (중상/60-100g)</span>
               </div>
               <div className="mndtl_prdtab" aria-hidden="false">
                  <ul className="mndtl_prdtab_list">
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;상세정보탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailinfo" target="">상세</a>
                     </li>
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;고객리뷰탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailreview" target="">리뷰<span className="mndtl_prdtab_num">543</span></a>
                     </li>
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;QnA탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailqna" target="">Q&amp;A<span className="mndtl_prdtab_num">17</span></a>
                     </li>
                     <!--  몰탭 광고 상품 비노출 처리 -->
                     <li className="" data-react-unit-type="text" data-react-unit-text="[{&quot;type&quot;:&quot;text&quot;,&quot;value&quot;:&quot;추천상품탭&quot;}]">
                        <a href="#" className="mndtl_prdtab_link clickable" data-react-tarea-dtl-cd="t00014" data-cont-target="#_detailgoods" target="">추천</a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="mndtl_rgt">
               <div className="mndtl_unit_thmb">
                  <a href="javascript:window.scrollTo(0,0)" target="_parent">
                     <div className="mndtl_unit_img" style="background-image:url('https://sitem.ssgcdn.com/07/70/59/item/1000040597007_i1_30.jpg')"></div>
                  </a>
               </div>
            </div>
         </div> */}

         {/* {productData && productData.id}  */}
         {/* {productData.brand} */}

         <ProductHeader productData = {productData} />
         <ProductDetail />
         <Review />
         <ProductExtraInfo />
      </>
   );
}

export default Product;