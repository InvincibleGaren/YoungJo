import React from 'react';
import Logo from "./Logo";
import Search from "../Search";
import CartImg from '../../../img/cart.png';

import "../../../css/components/HeaderTop.css"
import Cart from './Cart';
import { Link } from 'react-router-dom';

function HeaderTop(props) {
    return ( 
        <div className='HeaderTop'>
            <Logo />
            <div className='HeaderRight'>
                <Search setQueryState={props.setQueryState} setUrlState={props.setUrlState}/>
                <Cart />
            </div>
        </div>
     );
}

export default HeaderTop;