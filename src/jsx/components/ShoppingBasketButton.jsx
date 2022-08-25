import React from 'react';

function ShoppingBasketButton() {
	
    return ( 
        <p id="mHeaderCartBtn" className="gnb_util_mn ty_cart clickable" data-react-tarea="웹공통_N|GNB|장바구니" >
			<i className="icon icon_cart">
				<span id="mHeaderCartNm" className="blind">장바구니</span>
			</i>
			<span className="cmnoti_cartshare" id="cmnoti_cartshare"><span className="blind">함께 장보기</span></span> <span className="cmnoti_push" id="cartCnt_header"><span className="blind" id="cartCntSpan">담은 상품 수</span></span>
		</p>
     );
}

export default ShoppingBasketButton;




