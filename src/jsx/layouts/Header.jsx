import React from 'react';

import Slider from '../components/widgets/HeaderSlider';
import HeaderTop from '../components/ui/HeaderTop';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';



function Header() {

    const path = useLocation()
    // const [URL, setUrl] = useSearchParams();
    const [name, setName] = useState()

    useEffect(()=>{
        setName(path.pathname.split('/')[1])
        console.log(path.pathname)
    },[])
    return ( 
        <header id="m_header" className='mcom_header react-area'>
            <HeaderTop />
            {
                name !== "" ? "" :    
                <Slider />
            }
        </header>
     );
}

export default Header;