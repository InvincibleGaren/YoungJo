import React, { useEffect, useState } from 'react';
import cardPromotionDatas from '../../../datas/CardPromotionDatas.js'

import MainTitleUi from './MainTitleUi';
import SubTitleUi from './SubTitleUi';

import CardPromotionItem from './CardPromotionItem';
import "../../../css/components/CardPromotion.css"
function CardPromotion() {

    const [promotionData, setPromotionData] = useState([]);
    useEffect(()=>{
        setPromotionData(cardPromotionDatas);
    },[])

    return (  
        <>
        {/* <div className='CardPromotion'>
            <MainTitleUi title="이번 주 카드 프로모션"/>
            <SubTitleUi title="SSGPAY로 결제하셔도 혜택 받을 수 있어요"/>
            <div className='CardPromotionItemList'>
                {
                    promotionData && promotionData.map(Item =>(
                        <CardPromotionItem item={Item} key={Item.id}/>
                    ))
                }
            </div>
        </div> */}

        {/* <section>
            <div>
                <div className="cmgrid_full_box" data-page-set-id="117">
                    <div className="cmitem_cardbenfit_unit ty_horizontal ">
                        <div className="cmitem_cardbnfit_cont">
                            <ul className="cmitem_cardbnfit_lst">
                                {
                                    promotionData && promotionData.map(promotion=>(
                                        <li className="cmitem_cardbnfit_item" key={promotion.id} style={{backgroundColor:promotion.bgColor}}>
                                            <a href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005&amp;recruitmentPath=L6007001&amp;eventCode=HPG02" className="clickable" data-react-tarea="홈|카드행사_배너|배너_클릭|SSG.COM카드 ED2 220718~_banrId=2003185343">
                                                <div className="cmitem_cardbnfit_discount">
                                                    <span className="cmitem_cardbnfit_rate">
                                                        <span className={promotion.price}>~</span>
                                                        <em>{promotion.rate}</em>
                                                        <span className={promotion.price}>만</span>
                                                        <span className={promotion.percent}>%</span>
                                                    </span>
                                                    <span className="cmitem_cardbnfit_bi">
                                                        <img src={promotion.logo} data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png" alt="SSG.COM카드" className="ssg_lazy loaded" data-ll-status="loaded" />
                                                    </span>
                                                </div>
                                                <div className="cmitem_cardbnfit_info">
                                                    <span className="card_info_tx">
                                                        <span className="card_info_tx1">{promotion.card}</span>
                                                    </span>
                                                    <span className="card_info_name">
                                                        <span className="card_info_name1">{promotion.text}</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <div class="cmgrid_full_box js-set-header" data-page-set-id="117">
            <div class="cmtit_heading ">
                <div class="cmtit_txtbx">
                    <h3 class="cmtit_maintxt">이번 주 카드 프로모션</h3>
                    <p class="cmtit_subtxt">SSGPAY로 결제하셔도 혜택 받을 수 있어요</p>
                </div>
            </div>
        </div>
        <div class="cmitem_cardbenfit_unit ty_horizontal ">
        <div class="cmitem_cardbnfit_cont">
            <ul class="cmitem_cardbnfit_lst">
                <li class="cmitem_cardbnfit_item" style={{backgroundColor: "#363635"}} data-observable-item="true" data-react-unit-type="banr" data-react-unit-id="2003182818" data-react-unit-inx="0" data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id="" data-react-advert-tgt-id="" data-react-advert-bilng-type-cd="" data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd="" data-react-prior-advert-acct-grp-id="">
                        <a href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&amp;siteNo=6005&amp;recruitmentPath=L6007001&amp;eventCode=HPG02" class="clickable" data-react-tarea="홈|카드행사_배너|배너_클릭|SSG.COM카드 ED2 220901~220916_banrId=2003182818" data-react-tarea-dtl-cd="t00001">
                            <div class="cmitem_cardbnfit_discount">
                                <span class="cmitem_cardbnfit_rate"><em>~7</em>만원</span>
                                <span class="cmitem_cardbnfit_bi">
                                    <img src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png" data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png" alt="SSG.COM카드" class="ssg_lazy loaded" data-ll-status="loaded" />
                                </span>
                            </div>
                            <div class="cmitem_cardbnfit_info">
                                <span class="card_info_tx">
                                    <span class="card_info_tx1">SSG.COM카드</span>
                                    <span class="card_info_tx2">Edition2</span>
                                </span>
                                <span class="card_info_name">
                                    <span class="card_info_name1">최대 3만원</span>
                                    <span class="card_info_name2">즉시할인외</span>
                                </span>
                            </div>
                        </a>
                    </li>
                <li class="cmitem_cardbnfit_item" style={{backgroundColor: "#006bff"}} data-observable-item="true" data-react-unit-type="banr" data-react-unit-id="2002761841" data-react-unit-inx="1" data-react-mdl-info="" data-react-advert-yn="N" data-react-advert-bid-id="" data-react-advert-tgt-id="" data-react-advert-bilng-type-cd="" data-react-advert-kind-cd="" data-react-advert-extens-tery-div-cd="" data-react-prior-advert-acct-grp-id="">
                        <a href="/event/eventDetail.ssg?promId=1100575267" class="clickable" data-react-tarea="홈|카드행사_배너|배너_클릭|SSG.COM삼성카드_220801~_banrId=2002761841" data-react-tarea-dtl-cd="t00001">
                            <div class="cmitem_cardbnfit_discount">
                                <span class="cmitem_cardbnfit_rate"><em>~7</em>.<em>5</em>만원</span>
                                <span class="cmitem_cardbnfit_bi">
                                    <img src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png" data-src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png" alt="SSG.COM카드" class="ssg_lazy loaded" data-ll-status="loaded" />
                                </span>
                            </div>
                            <div class="cmitem_cardbnfit_info">
                                <span class="card_info_tx">
                                    <span class="card_info_tx1">SSG.COM</span>
                                    <span class="card_info_tx2">삼성카드</span>
                                </span>
                                <span class="card_info_name">
                                    <span class="card_info_name1">첫결제쿠폰/</span>
                                    <span class="card_info_name2">즉시할인</span>
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default CardPromotion;