import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "../../../css/components/CardPromotionItem.css"

function CardPromotionItem({item}) {

    return (  
        <div className={'CardPromotionItem'+" "+item.brand}>
            <Link to="/">
                <div className='CardPromotionItemTop'>
                    <div><span>~{item.rate}</span>만</div>
                    <img src={item.logo}></img>
                </div>
                <div className='CardPromotionItemMiddle'>
                    {item.card}
                </div>
                <div className='CardPromotionItemBottom'>
                    {item.text}
                </div>
            </Link>
        </div>
    );
}

export default CardPromotionItem;