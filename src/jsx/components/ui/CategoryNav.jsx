import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TempResponse from "../../../datas/CategoryNav.json"

import { Link } from 'react-router-dom';
import HappyLoungeItem from "../../components/ui/HappyLoungeItem"

import "../../../css/components/CategoryNav.css"

function CategoryNav() {

    const [categoryNav, setcategoryNav] = useState([])
    const countQuery = "qty=5";
    const url = "http://10.10.10.127:9000/api/happyLoungeItem?"+countQuery
    useEffect(() => {
        axios.get(url, {timeout:1000}).then(Response => {
            setcategoryNav(Response.data)
        })
        .catch(error => {
            setcategoryNav(TempResponse)
        })
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