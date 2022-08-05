import React from 'react';
import Category from '../components/ui/Category';
import Slider from "../components/widgets/Slider"
import HappyLounge from '../components/ui/HappyLounge';
import Nav from '../components/ui/Nav';

import HotBrand from "../components/HotBrand";
import UnderNewService from '../components/UnderNewService';
function HomeMain() {
    return ( 
        <main>
            <Nav />
            <Category />
            <HappyLounge />
            <UnderNewService />
            <HotBrand />
        </main>
     );
}

export default HomeMain;