import React from 'react';
import HomeMain from '../layouts/HomeMain';

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import FooterNav from '../components/ui/FooterNav';
import HeaderNav from '../components/ui/HeaderNav';
import HeaderSlider from '../components/widgets/HeaderSlider';

function Home() {
    return ( 
        <div id="m_wrap" className="mcom_wrap sm_v3 sm_page_main has_smhero_banner">
            <Header />
            <div id="m_container" className="mcom_container" data-iframe-height>
                <HeaderSlider />
                <HeaderNav />
                <HomeMain />
                <div style={{height: "100px"}}></div>
                <Footer />
            </div>
            <FooterNav />
        </div>    
     );
}

export default Home;