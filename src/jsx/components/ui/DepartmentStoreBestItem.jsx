import React, { startTransition, useEffect, useState } from 'react';
import axios from 'axios';
import TitleUi from './MainTitleUi';
import CategoryNav from "../../components/ui/CategoryNav";


import dsbidatas from "../../../datas/DSBIDatas";
import "../../../css/components/DepartmentStoreBestItem.css"

function DepartmentStoreBestItem() {

    const[dsbiData, setDSBIData ] = useState([])
    const url = "http://10.10.10.127:9000/api/category/img"

    useEffect(()=> {
        axios.get(url,{timeout:1000}).then(Response => {
            setDSBIData(Response.data)
        })
        .catch(error => {
            setDSBIData(dsbidatas)
        })
    },[])

    return ( 
        <div className='DepartmentStoreBestItem'>
            <TitleUi title="백화점 Best Items" />
            <CategoryNav />
            <ul className='DSBI'>
                {
                    dsbiData && dsbiData.map(dsbi => (
                        <li key = {dsbi.id}>
                            <div>
                                <img className='priceimg' src = {dsbi.imgUrl} alt = "img"/>
                                <p className='brandname'>{dsbi.brandName}</p>
                                <p className = "textlimit">{dsbi.name}</p>
                                <p className='salepp'><div className='saleprice'>{dsbi.salePrice}원 </div> <div className='salepercent'>{dsbi.salePercent}%</div></p>
                                {/* <p>{dsbi.salePercent}</p> */}
                                <p className='starreview'><p className='star'><img src= {dsbi.star}/>{dsbi.asterion}</p> <p className='review'>{dsbi.numOfReview}건</p></p>
                                {/* <p>{dsbi.numOfReview}</p> */}
                            </div>
                        </li>
                    ))
                }
            
            </ul>
            
        </div>
     );
}

export default DepartmentStoreBestItem;