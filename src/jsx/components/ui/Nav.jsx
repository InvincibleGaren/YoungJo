import React from 'react';
import { Link } from 'react-router-dom';
import navData from '../../../datas/navDatas.json'

function Nav() {

    return ( 
        <nav>
            {/* <ul>
                {
                    navData && navData.map(my=>(
                        <Link to={my.url}><li key={my.id}>{my.name}</li></Link>
                    ))
                }
            </ul> */}
            {
                navData && navData.map(my=>(
                    <Link to={my.url} key={my.id}>{my.name}</Link>
                ))
            }
        </nav>
    );
}

export default Nav;