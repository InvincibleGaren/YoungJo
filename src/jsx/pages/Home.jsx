import React from 'react';
import HomeMain from '../layouts/HomeMain';

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import LogIn from './LogIn_T';



function Home() {
    return ( 
        <div>
            <Header />
            <HomeMain />
            <LogIn/>
            <Footer />
        </div>    
     );
}

export default Home;