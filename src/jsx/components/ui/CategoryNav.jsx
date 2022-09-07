import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempResponse from "../../../datas/CategoryNav.json"

import { Link } from 'react-router-dom';
import "../../../css/components/CategoryNav.css"

function CategoryNav() {

    const [categoryNav, setcategoryNav] = useState([])
    const countQuery = "qty=5";
    
    useEffect(() => {
        setcategoryNav(TempResponse)
    },[])



    return ( 
        <nav className='CategoryNav'>
            {
                categoryNav && categoryNav.map(item=>(
                    <Link to="/" key={item.id}>{item.name}</Link>
                ))
            }
        </nav>
    );
}

export default CategoryNav;