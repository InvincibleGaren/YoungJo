import React, { useEffect, useState } from 'react';
import dsbidatas from "../../datas/DSBIDatas";

//찜(하트) 추가해야함.
//슬라이드 기능 추가해야함

function DepartmentStoreBestItem() {

    const[dsbiData, setDSBIData ] = useState([])

    useEffect(()=> {
        setDSBIData(dsbidatas)
    },[])

    return ( 
        <div>
            <ul className='DSBI'>
                {
                    dsbiData && dsbiData.map(dsbi => (
                        <li key = {dsbi.id}>
                            <div>
                                <img className='priceimg' src = {dsbi.imgUrl} alt = "img"/>
                                <p className='brandname'>{dsbi.brandName}</p>
                                <p className = "textlimit">{dsbi.name}</p>
                                <p className='salepp'><div className='saleprice'>{dsbi.salePrice}원 </div> <div className='salepercent'>{dsbi.salePercent}%</div></p>
                                <p className='starreview'><p className='star'><img src= {dsbi.star}/>{dsbi.asterion}</p> <p className='review'>{dsbi.numOfReview}건</p></p>
                                </div>
                        </li>
                    ))
                }
            
            </ul>
            
        </div>
     );
}

export default DepartmentStoreBestItem;