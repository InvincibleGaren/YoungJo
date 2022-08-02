import React from 'react';
import { Link } from 'react-router-dom';

import SearchImg from '../../img/search.png';
import CartImg from '../../img/cart.png';

function Search() {
    return ( 
		<div className='search'>
            <input type="search"/>
            <Link className='search-icon' to="/"><img  src={SearchImg} alt="검색"/></Link>
            <Link to="/"><img src={CartImg} alt="카트"/></Link>
		</div>
     );
}

export default Search;




