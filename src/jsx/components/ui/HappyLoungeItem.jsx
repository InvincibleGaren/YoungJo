import React, { useEffect, useState } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import axios from 'axios';
import Hart from "../../components/ui/Hart";
import Cart from "../../components/ui/Cart";

import "../../../css/components/HappyLoungeItem.css"
import PickBox from './PickBox';

function HappyLoungeItem({product}) {

    console.log(product);
    return ( 
        <div className='HappyLoungeItem'>
            <div className='HappyLoungeItemImg'>
                <div className='HappyLoungeItemImgLeft'>
                    {
                        product && <Link to="/"  ><img src={product.imgUrl1} /></Link>
                    }
                </div>
                <div className='HappyLoungeItemImgRight'>
                    <Link to="/"  ><img src={product.imgUrl2}/></Link>
                    <Link to="/"  ><img src={product.imgUrl3}/></Link>
                    <Link to="/"  ><img src={product.imgUrl4}/></Link>
                    <Link to="/"><div className='plus'>+</div></Link>              
                </div>
            </div>
            <div className='HappyLoungeItemText'>
                <Link to="/">
                    <div className='text1'>{product.text1}</div>
                    <div className='text2'>{product.text2}</div>
                    <div className='text3'>{product.text3}</div>
                    <div className='price'><span>{product.price}</span>원~</div>
                    <div className='pick'>
                        <PickBox pickCount={product.pick}/>
                        <div className='pick-right'>
                            <Hart />
                            <Cart />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
     );
}

export default HappyLoungeItem;