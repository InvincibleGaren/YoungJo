import React from 'react';
import Category from '../components/ui/Category';
import Slider from "../components/widgets/Slider"
import HappyLounge from '../components/ui/HappyLounge';
import Nav from '../components/ui/Nav';
function HomeMain() {
    return ( 
        <main>
            <Nav />
            <Category />
            <HappyLounge />
        </main>
     );
}

export default HomeMain;