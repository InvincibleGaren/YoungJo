import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return ( 
        <header>
           Header logo
           <Link to = "/">Home</Link>
           <Link to = "/product">Product</Link>
        </header>
     );
}

export default Header;