import React from 'react';
import Category from '../components/ui/Category4';
import Slider from "../components/widgets/HeaderSlider"
import HappyLounge from '../components/ui/HappyLounge';
import Nav from '../components/ui/HeaderNav';
import NewService from "../components/ui/NewService"
import HotBrand from "../components/ui/HotBrand";
import UnderNewService from '../components/ui/UnderNewService';
import DepartmentStoreBestItem from "../components/ui/DepartmentStoreBestItem"
import FooterNav from '../components/ui/FooterNav';

function HomeMain() {
    return ( 
        <main>
            <Nav />
            <Category />
            <HappyLounge />
            <NewService />
            <UnderNewService />
            <HotBrand />
            <DepartmentStoreBestItem />
            <FooterNav />
        </main>
     );
}

export default HomeMain;