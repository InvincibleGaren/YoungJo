import React from 'react';
import Logo from "./Logo";
import Search from "../Search";

import "../../../css/components/HeaderTop.css"

function HeaderTop(props) {
    return ( 
        <div className='HeaderTop'>
            <Logo />
            <Search setQueryState={props.setQueryState} setUrlState={props.setUrlState}/>
        </div>
     );
}

export default HeaderTop;