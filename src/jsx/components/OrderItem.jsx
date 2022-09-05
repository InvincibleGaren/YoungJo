import React from 'react';

function OrderItem(props) {
    console.log("AAAAA");
    console.log(props)

    return ( 
        <div className="OrderItem mnodr_unit_item">
            <div className="mnodr_unit_thmb">
                <span className="mnodr_unit_img" aria-hidden="true">
                    <img src={props.Item.thumbImg} alt="상품 썸네일 이미지" width="85" height="85" />
                </span>
            </div>
            <div className="mnodr_unit_cont">
                <div className="mnodr_unit_info ty2">
                    <span className="cm_mall_text">
                        <i className="sm">{props.Item.salesSite}</i>					
                    </span>
                    <em id="dispSalestrNm_1"></em>
                </div>
                <p className="mnodr_unit_tit ">
                    <a>
                        <strong className="mnodr_unit_brd">{props.Item.salesSite} </strong>
                        <span className="mnodr_unit_name">[{props.Item.brand}]{props.Item.title}</span>
                    </a>
                </p> 
                <span className="mnodr_unit_option mnodr_tx_point" id="shppRsvtType_1_1_50_"></span>
                <span className="mnodr_unit_option">옵션1 : {props.Item.optionValue1}</span>
                <span className="mnodr_unit_option">옵션2 : {props.Item.optionValue2}</span>
                <div className="mnodr_unit_prdpay ty_space">
                    <div className="mnodr_unit_l">      
                        <div className="mnodr_unit_newprice ty2">
                            <span className="blind">판매가격</span><em className="ssg_price">{(props.Item.price).toLocaleString()}</em><span className="ssg_tx">원</span>
                        </div>
                    </div>
                    <div className="mnodr_unit_r">
                        <span className="mnodr_unit_option">수량 1개</span>
                    </div>
                </div>
            </div>
        </div>
     );
}


export default OrderItem;


