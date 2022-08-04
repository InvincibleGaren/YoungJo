import React from 'react';
import Category from '../components/ui/Category';
import Slider from "../components/widgets/Slider"
import Camera from '../components/ui/Camera';
import Hart from '../components/ui/Hart';
import HappyLounge from '../components/ui/HappyLounge';
function HomeMain() {
    return ( 
        <main>
            <Category />
            <Camera />
            <Hart />
            <HappyLounge />
        </main>
     );
}

export default HomeMain;