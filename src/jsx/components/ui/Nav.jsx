import React from 'react';
import { Link } from 'react-router-dom';
import navData from '../../../datas/navDatas.json'

import "../../../css/components/Nav.css"

function Nav() {
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

export default Nav;