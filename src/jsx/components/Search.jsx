import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Server from "../../datas/Server.json";
import SearchImg from '../../img/search.png';
import Cart from '../components/ui/Cart';

import "../../css/components/Search.css"





function Search(props) {

    const url = "/allsearch";
    
    // const [query, setQuery] = useState(null);
    const [query, setQuery] = useState({
      query : "?query=",
      page : "&page=1",
      limit : "&limit=40",
      sort : "&sort=추천순",
      minPrice : "&minPrice=10",
      maxPrice : "&maxPrice=100000000"
    });
    const [itemlist, setItemlist] = useState();
    const linkElement = useRef(null);
    const inputCheck = (e) => {
      
      if(e.key === 'Enter')
      {
        linkElement.current.click();
      }
    }

    const inputChange = (e) => {
        // setQuery(e.target.value)
        setQuery({...query, query:`?query=${e.target.value}`})
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
          // to={query ? url+query : url} 
          to={query.query == "" 
              ? url 
              : url+query.query+query.page+query.limit+query.sort+query.minPrice+query.maxPrice
          }
          onClick={SearchSubmit}>
            <img  src={SearchImg} alt="검색"/></Link>
        <Cart />
      </div>
    );
}

export default Search;




