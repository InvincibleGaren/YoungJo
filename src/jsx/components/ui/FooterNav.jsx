import React from 'react';
import { Link } from 'react-router-dom';
import navData from '../../../datas/FooterNav.json'
import "../../../css/components/FooterNav.css"

function FooterNav() {
    return ( 
        <nav className='FooterNav'>
            {
                navData && navData.map(my=>(
                    <Link to={my.url} key={my.id}>
                        {
                            my.iconName?
                            <span class="material-symbols-outlined">{my.iconName}</span>
                            :
                            <img src={my.iconUrl}></img>
                        }
                        {
                            my.name?
                            <div>{my.name}</div>
                            :
                            <div>""</div>
                        }
                    </Link>
                ))
            }
        </nav>
    );
}

export default FooterNav;