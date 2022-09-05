import React from 'react';
import { Link } from 'react-router-dom';
import navData from '../../../datas/FooterNav.json'
import "../../../css/components/FooterNav.css"

function FooterNav() {
    return ( 
        <div id="m_toolbar" className="mcom_toolbar_v2 react-area">
			<ul className="toolbar_menu" role="navigation">
				<li className="toolbar_item">
                    <Link to="/cate" className="toolbar_lnk ty_category clickable" data-react-tarea="웹공통_N|웹바|카테고리|신세계몰">
                        <i className="icon ty_lg icon_category" aria-hidden="true"></i>
                        <span className="toolbar_txt">카테고리</span>
                    </Link>
                </li>
                <li className="toolbar_item">
                    <Link to="allsearch" className="toolbar_lnk ty_search">
                        <i className="icon ty_lg icon_search" aria-hidden="true"></i>
                        <span className="toolbar_txt">통합검색</span>
                    </Link>
				</li>
				<li className="toolbar_item">
					<Link to="/" className="toolbar_lnk ty_home clickable" data-react-tarea="웹공통_N|웹바|홈|신세계몰">
						<i className="icon ty_lg icon_house" aria-hidden="true"></i>
						<span className="toolbar_txt">홈</span>
					</Link>
				</li>
				<li className="toolbar_item" id="bottomOrderInfoLi">
					<Link to="/mypage" className="toolbar_lnk ty_myssg clickable" data-react-tarea="웹공통_N|웹바|MY_SSG">
						<i className="icon ty_lg icon_person" aria-hidden="true"></i>
						<span className="toolbar_txt">MY</span>
						<span className="cmnoti_push" id="bottomOrderCnt" style={{display:"none"}}><span className="blind" id="bottomOrderCntSpan">새 메세지 수</span></span>
					</Link>
				</li>
				<li className="toolbar_item" id="bottomHistryLi">
					<Link to="//m.ssg.com/comm/mHistoryList.ssg" className="toolbar_lnk ty_history clickable" id="_btn_history" data-react-tarea="웹공통_N|웹바|최근본">
						<i className="icon ty_lg icon_eye" aria-hidden="true"></i>
						<span id="mHistory_toolbar_thumb" className="toolbar_thumb" style={{display:"none"}}><img id="bottomToolbarThumbImg" alt="최근본 상품 이미지" src='https://simg.ssgcdn.com/trans.ssg?src=/ui/ssg/img/common/img_ready_500x500.jpg&amp;w=120&amp;h=120&amp;t=c0a0ff138401522845f7de2cd29ae2b124f3ccea'/></span>
						<span id="mHistory_toolbar_txt" className="toolbar_txt">최근본</span>
					</Link>
				</li>
			</ul>
		</div> 
    );
}

export default FooterNav;