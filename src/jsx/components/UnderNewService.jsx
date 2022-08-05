// UnderNewService.jsx는 App.js에서 import하고 return값에 넣어서 호출
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import unsdatas from '../../datas/UNSDatas'


import '../../css/components/UnderNewService.css'

/* 카테고리 클릭시 만든 페이지로 이동 -> Link to 사용 +app.js에 브라우저 라우트에 링크 path 추가 +Link to 쓸거면 click 이벤트 필수?
    VS  외부 url 연결 -> a href 이용? */

function UnderNewService() {

    const [unsData, setUNSData] = useState([])
    //[변수명, 함수명] = useState([]) : 이 함수로 이 변수값 바꿀게
    // const url = ""
    //서버에다가 원하는 url을 던지면 그 url에 필요한 데이터들을 서버가 알아서 줌.
    //필요한 li가 몇갠지, li에 이미지,텍스트 등 머가 필요한지 이런 것도 걍 url만 요청하면 백에서 알아서 관련 데이터들을 줌.

    useEffect(()=> {
        setUNSData(unsdatas)
    },[])
    //임시방편 데이터 js인 UNSDatas.js파일 별칭인 unsdatas를 받아서 setUNSData 함수를 실행 + setUNSData함수는 unsData라는 변수 값을 변경하는 함수
    //->setUNSData함수 : import한 unsdatas값을 unsData라는 변수에 넣겠다. 
    //+ useEffect함수 특징인 페이지 첨 들어가면 호이스팅처럼 useEffect를 런타임 돌기 전에 무조건 한 번 실행(=setUNSData함수가 젤 첨에 한 번 실행됨.)

    // useEffect(()=> {
    //     axios.get(url).then(unsdatas);
    //     console.log(unsdatas)
    //     setUNSData(unsdatas)
    // })
    //get(url): 프론트에서 이 url 부분의 데이터를 주세요 하고 백/서버에 요청
    //->요청해서 받은 데이터를 then(변수명) undatas에 넣겠다.
    //콘솔찍어볼게

    //=>(총정리)undatas(url요청해서 받은 데이터를 넣은 변수) 데이터들을 setUNSData함수를 통해 unsData에 넣겠다.


    return ( 
        <div>
            <ul className='UNS'>
               {
                    unsData && unsData.map(uns =>(
                        <li key = {uns.id}>
                            <div className = "clickable">
                                <img src = {uns.imgUrl} alt = "img"/>
                                <p>{uns.name}</p>
                            </div>
                        </li>
                    ))

               }
            </ul>
        </div>

        
     );
}

export default UnderNewService; 