import React from 'react';
import { Link } from 'react-router-dom';
import navData from '../../../datas/headerNav.json'

function HeaderNav() {

    return ( 
        <div id="m_topnav" className='mcom_topnav react-area'>
            <h2 className="blind">서비스 매장 바로가기</h2>
            <ul className="topnav_menu" role="navigation">
                {  
                navData && navData.map(my=>(
                    <li className="topnav_item" key={my.id}>
                        <Link to={my.url} className={my.id === 1 ? "topnav_lnk on clickable" : "topnav_lnk clickable"} data-react-tarea="스와이프|매장클릭|홈">
                            <span className="topnav_txt">{my.name}</span>
                        </Link>
                    </li>
                ))
                }
            </ul>
            
        </div>
    );
}

export default HeaderNav;