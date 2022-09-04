import React from 'react';
import Logo from "./Logo";
import Search from "../Search";

import Cart from './Cart';

function HeaderTop(props) {
    return ( 
        <div id='m_gnb' className='mcom_gnb v2'>
            <Logo />
            <div className="gnb_util">
                <Search setQueryState={props.setQueryState} setUrlState={props.setUrlState}/>
                <Cart />
            </div>
            
        </div>
     );
}

export default HeaderTop;