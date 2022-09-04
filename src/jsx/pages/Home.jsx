import React from 'react';
import HomeMain from '../layouts/HomeMain';

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

function Home() {
    return ( 
        <div id="m_wrap" className="mcom_wrap sm_v3 sm_page_main has_smhero_banner">
            <Header />
            <HomeMain />
            <Footer />
        </div>    
     );
}

export default Home;