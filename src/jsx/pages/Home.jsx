import React from 'react';
import Slider from '../components/widgets/Slider';
import Header from '../layouts/header';
import HomeMain from '../layouts/homeMain';
import Footer from '../layouts/footer';



function Home() {
    return ( 
        <div>
            <Header />
            <homeMain />
            <Footer />
        </div>
     );
}

export default Home;