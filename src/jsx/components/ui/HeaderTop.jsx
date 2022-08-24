import React from 'react';
import Logo from "./Logo";
import Search from "../Search";

import "../../../css/components/HeaderTop.css"

function HeaderTop(props) {
    return ( 
        <div className='HeaderTop'>
            <Logo />
            <Search setState={props.setState}/>
        </div>
     );
}

export default HeaderTop;