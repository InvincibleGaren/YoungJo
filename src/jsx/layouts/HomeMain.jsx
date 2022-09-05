import React from 'react';
import HappyLounge from '../components/ui/HappyLounge';
import NewService from "../components/ui/NewService"
import HotBrand from "../components/ui/HotBrand";
import UnderNewService from '../components/ui/UnderNewService';
import DepartmentStoreBestItem from "../components/ui/DepartmentStoreBestItem"
import CardPromotion from '../components/ui/CardPromotion';
import LetsTryOn from '../components/ui/LetsTryOn';
import NoticeBar from '../components/ui/NoticeBar';
import CmgridFullBox from '../components/ui/CmgridFullBox';
import MainBlank from '../components/MainBlank';
import MainMiddleBanner from '../components/ui/MainMiddleBanner';

function HomeMain() {
    return ( 
        <div id="m_content" className="react-area" data-globalid="홈" data-areaid="ad_list">
            <div className="cmgrid_module">
                <div className="cmgrid_list" data-equal-height="false">
                    <CmgridFullBox />
                    <HappyLounge />
                    <MainBlank height={20}/>
                    <MainMiddleBanner />
                    <MainBlank height={20}/>
                    {/* <NewService />
                    <UnderNewService />
                    <HotBrand />
                    <DepartmentStoreBestItem />
                    <CardPromotion />
                    <LetsTryOn />
                    <NoticeBar /> */}
                </div>
            </div>
            
        </div>
     );
}

export default HomeMain;