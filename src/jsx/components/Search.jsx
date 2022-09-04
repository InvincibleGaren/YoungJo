import React from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {

  const navigate = useNavigate();

  const goSearch = (e) => {
    e.preventDefault();
    navigate('/allsearch')
  }

    return ( 

        <div className="gnb_util_search">
          <fieldset>
              <form id="m_sch_bottom_form" onSubmit={goSearch}>
                  <div className="gnb_search_inpbox">
                      <div className="gnb_search_inpbox_sbox">
                          <input type="search" id="globalSearchInput" className="gnb_search_inpbox_inp" onClick={goSearch}/>
                          <button type="submit" id="globalSearchButton" className="gnb_search_inpbox_src">
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




