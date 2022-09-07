import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TitleUi from './MainTitleUi';
import CategoryNav from "../../components/ui/CategoryNav";


import dsbidatas from "../../../datas/DSBIDatas";
import "../../../css/components/DepartmentStoreBestItem.css"
import AllSearchItem from './AllSearchItem';

//찜(하트) 추가해야함.
//슬라이드 기능 추가해야함

function DepartmentStoreBestItem() {

    const[dsbiData, setDSBIData ] = useState([])

    useEffect(()=> {
        setDSBIData(dsbidatas)
    },[])

    return ( 
        <div className='DepartmentStoreBestItem'>
            <TitleUi title="백화점 Best Items" />
            <CategoryNav />
            {/* <ul className='DSBI'> */}
            <ul id="AllSearchItemList" className="cmitem_grid_lst mnsditem_ty_thmb">
                {
                    dsbiData && dsbiData.map(item => (
                        <AllSearchItem key={item.listIndex} Item={item}/>
                        //  좋아요 기능이 업는 코드
                        // <li key = {dsbi.id}>
                        //     <div>
                        //         <img className='priceimg' src = {dsbi.imgUrl} alt = "img"/>
                        //         <p className='brandname'>{dsbi.brandName}</p>
                        //         <p className = "textlimit">{dsbi.name}</p>
                        //         <div className='salepp'>
                        //             <div className='saleprice'>{dsbi.salePrice}원</div> 
                        //             <div className='salepercent'>{dsbi.salePercent}%</div>
                        //         </div>
                        //         <div className='starreview'>
                        //             <div className='star'>
                        //                 <img src= {dsbi.star}/>
                        //                 {dsbi.asterion}
                        //             </div>
                        //             <div className='review'>
                        //                 {dsbi.numOfReview}건
                        //             </div>
                        //         </div>
                        //     </div>
                        // </li>
                    ))
                }
            </ul>
        </div>
     );
}

export default DepartmentStoreBestItem;