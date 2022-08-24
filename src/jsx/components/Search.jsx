import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Server from "../../datas/Server.json";
import SearchImg from '../../img/search.png';
import Cart from '../components/ui/Cart';

import "../../css/components/Search.css"





function Search(props) {

    const url = "/allsearch?query=";
    
    const [query, setQuery] = useState(null);
    const [itemlist, setItemlist] = useState();
    const linkElement = useRef(null);
    const inputCheck = (e) => {
      
      if(e.key === 'Enter')
      {
        linkElement.current.click();
      }
    }

    const inputChange = (e) => {
        setQuery(e.target.value)
    }

    const SearchSubmit = (e) =>{
        console.log(query);
        if(props.setState)
          props.setState(query)
    }

    return ( 
      <div className='search'>
        <input type="search" onChange={inputChange} onKeyDown={inputCheck} />
        <Link ref={linkElement} 
          className='search-icon' 
          to={query ? url+query : url} 
          onClick={SearchSubmit}>
            <img  src={SearchImg} alt="검색"/></Link>
        <Cart />
      </div>
    );
}

export default Search;




