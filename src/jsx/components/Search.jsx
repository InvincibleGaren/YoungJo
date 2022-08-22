import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Server from "../../datas/Server.json";
import SearchImg from '../../img/search.png';
import Cart from '../components/ui/Cart';

import "../../css/components/Search.css"





function Search() {


    const [query, setQuery] = useState();
    const [itemlist, setItemlist] = useState();

    const inputChange = (e) => {
        setQuery(e.target.value)
    }

    const SearchSubmit = (e) =>{
        // const url = Server.baseUrl+"api/search"+"?query="+query;
        const url = "/allsearch?query="+query;
        window.location.href = url;
        //const url = Server.baseUrl+"api/search"+"?query="+query;
        // const config = {timeout:1000};
        // axios.get(url, config)
        //     .then(LoginResult => { 
        //         console.log(LoginResult);
        //         setItemlist(LoginResult.data.boardList);
        //     })
        //     .catch(error => {
        //         switch(error.code){
        //             case "ECONNABORTED":
        //             case "ERR_NETWORK":
        //                 alert("서버와 연결을 하지 못함\n원인 : "+error.message);
        //                 return;
        //         }
        //         switch(error.response.status){
        //             case 400:
        //                 console.log(error);
        //                 alert("필수입력 항목들을 입력해주세요.");
        //                 break;
        //             case 401:
        //                 console.log(error);
        //                 alert(error.response.data.data)
        //                 break;
        //             case 500:
        //                 console.log(error);
        //                 alert(error.response.data.message)
        //                 break;
        //             default:
        //                 alert("알 수 없는 응답. 에러 코드 : "+error.response.status);
        //                 break;
        //         }
        //     });
    }

    return ( 
      <div className='search'>
        <input type="search" onChange={inputChange}/>
        <Link className='search-icon' to="#" onClick={SearchSubmit}><img  src={SearchImg} alt="검색"/></Link>
        <Cart />
      </div>
    );
}

export default Search;




