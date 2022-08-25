import React, { useEffect, useState } from 'react';
import cardPromotionDatas from '../../../datas/CardPromotionDatas.js'

import MainTitleUi from './MainTitleUi';
import SubTitleUi from './SubTitleUi';

import CardPromotionItem from './CardPromotionItem';
import "../../../css/components/CardPromotion.css"
function CardPromotion() {

    const [promotionData, setPromotionData] = useState([]);
    useEffect(()=>{
        setPromotionData(cardPromotionDatas);
    },[])

    return (  
        <div className='CardPromotion'>
            <MainTitleUi title="이번 주 카드 프로모션"/>
            <SubTitleUi title="SSGPAY로 결제하셔도 혜택 받을 수 있어요"/>
            <div className='CardPromotionItemList'>
                {
                    promotionData && promotionData.map(Item =>(
                        <CardPromotionItem item={Item} />
                    ))
                }
            </div>
        </div>
    );
}

export default CardPromotion;