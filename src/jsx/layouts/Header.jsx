import React from 'react';

import Slider from '../components/widgets/HeaderSlider';
import HeaderTop from '../components/ui/HeaderTop';



function Header() {
    return ( 
        <header className='container-fluid'>
            <HeaderTop />
            <Slider />
        </header>
     );
}

export default Header;