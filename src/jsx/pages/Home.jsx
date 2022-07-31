import React from 'react';
import Slider from '../components/widgets/slider';
import Header from '../layouts/header';
import HomeMain from '../layouts/homeMain';
import Footer from '../layouts/footer';



function Home() {
    return ( 
        <div>
            <Header />
            <HomeMain />
            <Footer />
        </div>
     );
}

export default Home;