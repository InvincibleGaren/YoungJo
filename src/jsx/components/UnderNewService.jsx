// UnderNewService.jsx는 App.js에서 import하고 return값에 넣어서 호출
import React from 'react';

/* 카테고리 클릭시 만든 페이지로 이동 -> Link to 사용 +app.js에 브라우저 라우트에 링크 path 추가 +Link to 쓸거면 click 이벤트 필수?
    VS  외부 url 연결 -> a href 이용? */

function UnderNewService() {
    return ( 
        <div>
            <ul className='UNS'>
                <li>
                    <img src='https://sui.ssgcdn.com/cmpt/banner/202207/2022072018095879442344852334_902.png' />
                    {/* 그냥 텍스트 적어도 브라우저에 뜨지만 <p></p>로 싸기 */}
                    <p>명절</p>
                </li>
                <li><a href='https://m-shinsegaemall.ssg.com/page/happybuy.ssg'><img src='//sui.ssgcdn.com/cmpt/banner/202207/2022072018085132408328907832_886.png'/><p>해피라운지</p></a></li>
                <li>{/*<Link to ='공식 브랜드관 페이지'>*/}<img src='//sui.ssgcdn.com/cmpt/banner/202207/2022072018090271094493915549_213.png'/><p>공식 브랜드관</p>{/*</Link>*/}</li>
                {/* <li><Link to ='백화점 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202206/2022062117422173428272685827_495.png'/><p>백화점</p></Link></li>
                <li><Link to ='SSG럭셔리 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202206/2022062209260465823396706339_622.png'/><p>SSG럭셔리</p></Link></li>
                <li><Link to ='스마일클럽 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202207/2022071814342769215729184572_167.png'/><p>스마일클럽</p></Link></li>
                <li><Link to ='이벤트 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202206/2022062114025819381107491210_816.png'/><p>이벤트</p></Link></li>
                <li><Link to ='선물하기 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202207/2022072018091578124885200588_919.png'/><p>선물하기</p></Link></li>
                <li><Link to ='베스트 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202207/2022072220331105257687978768_380.png'/><p>베스트</p></Link></li>
                <li><Link to ='신상품 페이지'><img src='//sui.ssgcdn.com/cmpt/banner/202207/2022072018093759774844126584_698.png'/><p>신상품</p></Link></li> */}
                
            </ul>
        </div>

        
     );
}

export default UnderNewService; 