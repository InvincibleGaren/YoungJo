import React from 'react';
import MainTitleUi from './MainTitleUi';
import NewServiceItem from './NewServiceItem';

function NewService() {
    return ( 
        <>
            <MainTitleUi 
                title = "New Service"
                subTitle= "새롭게 오픈한 서비스를 소개해드려요"
            />
            <NewServiceItem />
            
        </>
    );
}

export default NewService;