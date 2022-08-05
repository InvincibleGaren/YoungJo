import React from 'react';
import { Link } from 'react-router-dom';

import SearchImg from '../../img/search.png';
import Cart from '../components/ui/Cart';

import "../../css/components/Search.css"

function Search() {
    return ( 
		<div className='search'>
                  <input type="search"/>
                  <Link className='search-icon' to="/"><img  src={SearchImg} alt="검색"/></Link>
                  <Cart />
		</div>
     );
}

export default Search;




