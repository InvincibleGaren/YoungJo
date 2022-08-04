import React from 'react';
import SearchInput from '../components/SearchInput';
import ShoppingBasketButton from '../components/ShoppingBasketButton';
import Logo from '../components/ui/Logo';
import Nav from '../components/ui/Nav';
import Search from '../components/Search';
import Slider from '../components/widgets/Slider';

function Header() {
    return ( 
        <header className='container-fluid'>
            <div className='header-top'>
                <Logo />
                <Search />
            </div>
            <Slider />
        </header>
     );
}

export default Header;