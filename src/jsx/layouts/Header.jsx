import React, {useState, useEffect} from 'react';
import HeaderTop from '../components/ui/HeaderTop';
import { useSearchParams } from 'react-router-dom';

function Header() {
    const [URL, setUrl] = useSearchParams();


    return ( 
        <header id="m_header" className='mcom_header react-area'>
            <HeaderTop />
        </header>
     );
}

export default Header;