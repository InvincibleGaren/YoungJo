import React from 'react';
import Logo from "./Logo";
import Search from "../Search";

import "../../../css/components/HeaderTop.css"

function HeaderTop() {
    return ( 
        <div className='HeaderTop'>
            <Logo />
            <Search />
        </div>
     );
}

export default HeaderTop;