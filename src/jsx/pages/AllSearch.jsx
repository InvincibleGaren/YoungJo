import React, {useState, useEffect} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import HeaderTop from '../components/ui/HeaderTop';
import MemberHeader from "../components/ui/MemberHeader";
import Server from "../../datas/Server.js";
import axios from "axios";
import AllSearchItem from '../components/ui/AllSearchItem';

import "../../css/pages/AllSearch.css";
import SearchFilter from '../components/ui/SearchFilter';
import { useRef } from 'react';
import { useInView } from "react-intersection-observer"
import Footer from '../layouts/Footer';


function AllSearch() {
   const [URL, setUrl] = useSearchParams();
   const [itemList, setItemList] = useState();
   const [likeCheck, setLikeCheck] = useState(false);
   const [scrollref, inView] = useInView();

   const [query, setQuery] = useState({
      query : URL.get('query') === "null" ? null:URL.get('query'),
      page : URL.get('page'),
      limit : URL.get('limit'),
      sort : URL.get('sort'),
      minPrice : URL.get('minPrice'),
      maxPrice : URL.get('maxPrice'),
    });

  
   useEffect(() => {
      // 스크롤 기준 요소가 화면에 보이면
      
      if(query.query && inView)
      {
         query.limit = Number(query.limit)+2;
         setUrl({...query, limit: query.limit});
         // setQuery({...query, limit: query.limit});
      }
    }, [inView])

   useEffect(()=>{
      if(query.query){
         const url = `${Server.baseUrl}api/search?query=${query.query}&page=${query.page}&limit=${query.limit}&sort=${query.sort}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
         const token = sessionStorage.getItem("login");
         const config = {timeout:3000, headers:{authentication: token}};
   
         // setUrl({...query, limit: query.limit});
         
         axios.get(url, config)
            .then(LoginResult => { 
               console.log(LoginResult);
               if(LoginResult.data.boardList?.length)
                  setItemList(LoginResult.data.boardList);
               else
                  setItemList(null);
            })
            .catch(error => {
               console.log(error);
               switch(error.code){
                  case "ECONNABORTED":
                  case "ERR_NETWORK":
                       alert("서버와 연결을 하지 못함\n원인 : "+error.message);
                       return;
               }
               switch(error.response.status){
                  case 400:
                        console.log(error);
                        alert("필수입력 항목들을 입력해주세요.");
                        break;
                  case 401:
                        console.log(error);
                        alert(error.response.data.data)
                        break;
                  case 500:
                        console.log(error);
                        alert(error.response.data.message)
                        break;
                  default:
                        alert("알 수 없는 응답. 에러 코드 : "+error.response.status);
                        break;
               }
            });
      }
   }, [query, likeCheck]);

   useEffect(() => {
         setQuery({
            query : URL.get('query') === "null" ? null:URL.get('query'),
            page : URL.get('page'),
            limit : URL.get('limit'),
            sort : URL.get('sort'),
            minPrice : URL.get('minPrice'),
            maxPrice : URL.get('maxPrice'),
          });
   }, [URL]);

   // console.log("itemList : ");
   // console.log(itemList);
   return ( 
        <div className='AllSearch'>
            <HeaderTop QueryState={query} setQueryState={setQuery} setUrlState={setUrl}/>
            {URL.get('query') ? 
                itemList ?
                <div>
                    <SearchFilter QueryState={query} setUrlState={setUrl} setQueryState={setQuery}/>
                    <ul id="AllSearchItemList" className="cmitem_grid_lst mnsditem_ty_thmb">
                    {  
                        itemList.map((item)=>{
                            return(
                                <AllSearchItem key={item.listIndex} Item={item} LikeCheckState={likeCheck} setLikeCheckState={setLikeCheck}/>
                            )
                        })
                    }
                    </ul>
                </div>
                :
                <div className="cgsearch_none_result" id="mbr_kwd_alert_nolist">
                    <p>‘{URL.get('query')}’ 상품이 없습니다. 단어의 철자나 띄어쓰기가 정확한지 확인해 보세요.</p>
                </div>
            :
            <div className="cgsearch_none_result" id="mbr_kwd_alert_nolist">
                <p>최근검색어가 없습니다</p>
            </div>
            }
            <div className="cgsearch_recomm_tag" id="now_hot_all" ref={scrollref}>
               <h3 className="cgsearch_recomm_title">추천태그</h3>
               <div className="cgsearch_recomm_container">
                  <ul className="cgsearch_recomm_lst" id="now_hot_list">
                     <li>
                        <a href="http://m.ssg.com/search.ssg?target=all&amp;query=%23아이반찬">
                           <span className="cgsearch_recomm_img">
                              <img src="//sui.ssgcdn.com/cmpt/banner/202208/2022081916023935695532002653_178.PNG" alt="" />
                           </span>
                           <span className="cgsearch_recomm_txt">#아이반찬 고민이라면</span>
                        </a>
                     </li>
                     <li>
                        <a href="http://m.ssg.com/search.ssg?target=all&amp;query=%23에어프라이어용">
                           <span className="cgsearch_recomm_img">
                              <img src="//sui.ssgcdn.com/cmpt/banner/202208/2022081916033609100455262045_726.PNG" alt="" />
                           </span>
                           <span className="cgsearch_recomm_txt">#음식다넣어 다재다능해</span>
                        </a>
                     </li>
                     <li>
                        <a href="http://m.ssg.com/search.ssg?target=all&amp;query=%23건강식품">
                           <span className="cgsearch_recomm_img">
                              <img src="//sui.ssgcdn.com/cmpt/banner/202208/2022081916041381689255960035_175.PNG" alt="" />
                           </span>
                           <span className="cgsearch_recomm_txt">#지칠수록 건강관리</span>
                        </a>
                     </li>
                     <li>
                        <a href="http://m.ssg.com/search.ssg?target=all&amp;query=%23간편식품">
                           <span className="cgsearch_recomm_img">
                              <img src="//sui.ssgcdn.com/cmpt/banner/202208/2022081916043790403963142396_539.PNG" alt="" />
                           </span>
                           <span className="cgsearch_recomm_txt">#간편한데 맛도좋아</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <Footer />
        </div>
     );
}

export default AllSearch;



