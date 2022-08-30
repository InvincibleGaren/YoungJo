import React from 'react';

import Slider from '../components/widgets/HeaderSlider';
import HeaderTop from '../components/ui/HeaderTop';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Header() {

    const path = useLocation()
    const [name, setName] = useState()

    useEffect(()=>{
        setName(path.pathname.split('/')[1])
    },[])
    return ( 
        <header className='container-fluid'>
            <HeaderTop />
            {
                name === "product" ? "" :    
                <Slider />
            }
        </header>
     );
}

export default Header;