import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Cart from '../Cart';

function MyPageHeader() {

    const Navigate = useNavigate();


  return (
    <div>
        <div className="mcom_tit_renew  react-area">
			<h2 className="mcom_tit_txt clickable"><Link to="#">MY SSG</Link></h2>
            <div className="mcom_tit_lft">
                <Link to="#" className="btn_back clickable"  onClick={()=>{Navigate(-1)}}><span className="sp_ctg_icon ctg_icon_back"><span className="blind">이전 페이지</span></span></Link>
            </div>
            <div className="mcom_tit_rgt">
                <div className="btn_cate btn_cart">
                    <button type="button" className="clickable" >
                        <span className="sp_ctg_icon">
                            <Cart/>
                        </span>
                    </button>
                </div>
                <div className="btn_cate btn_home">
                    <Link to="/">
                        <span className="sp_ctg_icon ctg_icon_home"><span className="blind">홈</span></span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyPageHeader