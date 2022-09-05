import React from 'react';
import HappyLoungeItem from './HappyLoungeItem';
import MainTitleUi from './MainTitleUi';



function HappyLounge() {

    return ( 
        <>
            <MainTitleUi 
                title = "Happy Lounge"
                subTitle= "당신의 쇼핑이 특별해지는, 매일 오전 9시"
                url = "https://m-shinsegaemall.ssg.com/page/happybuy.ssg"
            />
            <HappyLoungeItem />
            <HappyLoungeItem />
            <HappyLoungeItem />
        </>
     );
}

export default HappyLounge;