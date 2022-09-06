import React from 'react';
import Logo from "./Logo";
import Search from "../Search";
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

function HeaderTop(props) {

    const navigate = useNavigate();

    const backTo = (e) =>{
        navigate(-1);
    }

    return ( 
        <div id='m_gnb' className='mcom_gnb v2'>
            {
                props.setUrlState ? 
                <div class="cgsearch_inpbox_back"><button type="button" onClick={backTo}><span class="blind">이전으로</span></button></div>
                :
                <Logo />
            }
            
            <div className="gnb_util">
                <Search QueryState={props.QueryState} setQueryState={props.setQueryState} setUrlState={props.setUrlState}/>
                <Cart />
            </div>
            
        </div>
     );
}

export default HeaderTop;