import React, {useState, useRef} from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import axios from "axios";
import Server from "../../datas/Server.json";
import SearchImg from '../../img/search.png';
import Cart from '../components/ui/Cart';

import "../../css/components/Search.css"
import { useEffect } from 'react';





function Search(props) {

    const searchURL = "/AllSearch";
    // const [query, setQuery] = useState(null);
    const [query, setQuery] = useState({
      query : "",
      page : "1",
      limit : "10",
      sort : "추천순",
      minPrice : "1",
      maxPrice : "200000000"
    });
    const [URL, setUrl ] = useState(
      `/AllSearch?query=${query.query}&page=${query.page}&limit=${query.limit}&sort=${query.sort}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
    );
    const linkElement = useRef(null);

    //사용자가 쿼리값을 입력하면 Link To 업데이트
    useEffect(()=>{
      setUrl(`/AllSearch?query=${query.query}&page=${query.page}&limit=${query.limit}&sort=${query.sort}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`);
    },[query])

    // 사용자가 Enter를 치면 검색 버튼 클릭.
    const inputCheck = (e) => {
      if(e.key === 'Enter')
      {
        linkElement.current.click();
      }
    }

    //사용자가 쿼리값을 1개씩 입력할 때마다 query state 변경
    const inputChange = (e) => {
        setQuery({...query, query: e.target.value})
    }

    //검색 버튼 클릭시 
    const SearchSubmit = (e) =>{
        props.setUrlState(URL);
    }

    return ( 
      <div className='search'>
        <input type="search" onChange={inputChange} onKeyDown={inputCheck} />
        <Link ref={linkElement} 
          className='search-icon' 
          to={URL} 
          onClick={SearchSubmit}>
            <img  src={SearchImg} alt="검색"/></Link>
        {/* <Cart /> */}
      </div>
    );
}

export default Search;




