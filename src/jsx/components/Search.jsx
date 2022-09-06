import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Search(props) {

  const navigate = useNavigate();
  const [query, setQuery] = useState({
      query : "",
      page : "1",
      limit : "10",
      sort : "추천순",
      minPrice : "1",
      maxPrice : "200000000",
  });

  console.log("props.setUrlState : "+props.setUrlState);

  const goSearch = (e) => {
    e.preventDefault();
    if(props.setUrlState){
      props.setUrlState({...props.QueryState, "query":query.query})
    }
    else{
      const url = `/allsearch?query=${query.query}&page=${query.page}&limit=${query.limit}&sort=${query.sort}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
      navigate(url);
    }
    
  }

  const inputQuery = (e) =>{
    setQuery({...query, query:e.target.value})
  }

    return ( 

        <div className="gnb_util_search">
          <fieldset>
              <form id="m_sch_bottom_form" onSubmit={goSearch}>
                  <div className="gnb_search_inpbox">
                      <div className="gnb_search_inpbox_sbox">
                          <input type="search" id="globalSearchInput" className="gnb_search_inpbox_inp" onChange={inputQuery}/>
                          <button type="submit" id="globalSearchButton" className="gnb_search_inpbox_src" onClick={goSearch}>
                              <i className="icon icon_search">
                                  <span className="blind">검색</span>
                              </i>
                          </button>
                      </div>
                  </div>
              </form>
          </fieldset>
      </div>
    );
}

export default Search;




