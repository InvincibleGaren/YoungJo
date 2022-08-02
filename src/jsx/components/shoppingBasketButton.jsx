import React from 'react';

function ShoppingBasketButton() {
	
    return ( 
        <p id="mHeaderCartBtn" class="gnb_util_mn ty_cart clickable" data-react-tarea="웹공통_N|GNB|장바구니" >
			<i class="icon icon_cart">
				<span id="mHeaderCartNm" class="blind">장바구니</span>
			</i>
			<span class="cmnoti_cartshare" id="cmnoti_cartshare"><span class="blind">함께 장보기</span></span> <span class="cmnoti_push" id="cartCnt_header"><span class="blind" id="cartCntSpan">담은 상품 수</span></span>
		</p>
     );
}

export default ShoppingBasketButton;




