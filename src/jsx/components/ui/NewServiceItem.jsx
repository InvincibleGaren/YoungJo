import React from 'react';
import NewServiceItemElement from '../NewServiceItemElement';
import NewServiceItemElementNavi from './NewServiceItemElementNavi';

function NewServiceItem() {
    return ( 
        <div className="cmgrid_full_box">
            <div className="cmhero_banner cmhero_banner_ty_sd_scroll ty_bn100">
                <div className="cmhero_swiper" id="_cmhero_swiper">
                    <div className="swiper-container swiper-container-horizontal swiper-container-ios">
                        <ul className="swiper-wrapper">
                            <NewServiceItemElement />
                            <NewServiceItemElement />
                            <NewServiceItemElement />
                            <NewServiceItemElement />
                        </ul>
                    </div>
                    <div className="swiper-ctrls">
                        <div className="swiper-pagination swiper-pagination-progressbar"><span className="swiper-pagination-progressbar-fill"></span></div>
                    </div>
                </div>
                <div className="cmhero_viewer" role="dialog" tabIndex="-1" aria-hidden="true">
                    <div className="cmhero_wrap" role="document" tabIndex="0">
                        <div className="cmhero_scroll">
                            <div className="cmhero_head">
                                <h3 className="cmhero_head_tit">전체보기</h3>
                                <button type="button" className="cmhero_close"><span className="blind">배너 전체보기 닫기</span></button>
                            </div>
                            <div className="cmhero_cont">
                                <ul className="cmhero_bnlst">
                                   <NewServiceItemElementNavi /> 
                                   <NewServiceItemElementNavi /> 
                                   <NewServiceItemElementNavi /> 
                                   <NewServiceItemElementNavi /> 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NewServiceItem;