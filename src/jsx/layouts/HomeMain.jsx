import React from 'react';
import Category from '../components/ui/Category4';
import Slider from "../components/widgets/HeaderSlider"
import HappyLounge from '../components/ui/HappyLounge';
import HeaderNav from '../components/ui/HeaderNav';
import NewService from "../components/ui/NewService"
import HotBrand from "../components/ui/HotBrand";
import UnderNewService from '../components/ui/UnderNewService';
import DepartmentStoreBestItem from "../components/ui/DepartmentStoreBestItem"
import FooterNav from '../components/ui/FooterNav';
import CardPromotion from '../components/ui/CardPromotion';
import LetsTryOn from '../components/ui/LetsTryOn';
import NoticeBar from '../components/ui/NoticeBar';

function HomeMain() {
    return ( 
        <main>
            <HeaderNav />
            <Category />
            <HappyLounge />
            <NewService />
            <UnderNewService />
            <HotBrand />
            <DepartmentStoreBestItem />
            <CardPromotion />
            <LetsTryOn />
            <NoticeBar />
            <FooterNav />
        </main>
     );
}

export default HomeMain;