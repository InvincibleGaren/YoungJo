import React from 'react';
import { Link } from 'react-router-dom';
import NewServiceItemSlider from "../widgets/NewServiceItemSlider"
import "../../../css/components/NewService.css"

import ResponseData from "../../../datas/ShinsegaeTimeDealItem.json"
import ShinsegaeTimeDealItem from "./NewServiceItem"
import TitleUi from './MainTitleUi';
import SubTitleUi from './SubTitleUi';

function NewService() {
    return ( 
        <div className='NewService'>
            <div>
                <TitleUi title="New Service"/>
                <SubTitleUi title={"새롭게 오픈한 서비스를 소개해드려요"}/>
            </div>
            
            <NewServiceItemSlider />
        </div>
    );
}

export default NewService;