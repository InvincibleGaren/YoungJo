import React from 'react';
import { Link } from 'react-router-dom';
import navData from '../../../datas/HeaderNav.json'

import "../../../css/components/HeaderNav.css"

function HeaderNav() {
    return ( 
        <nav className='hNav'>
            {
                navData && navData.map(my=>(
                    <Link to={my.url} key={my.id}>{my.name}</Link>
                ))
            }
        </nav>
    );
}

export default HeaderNav;