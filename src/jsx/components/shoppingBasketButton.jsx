import React from 'react';

function ShoppingBasketButton() {
    return ( 
        <a id="mHeaderCartBtn" href="javascript:mobileCommonFn.goCartViewPage('https://pay.ssg.com/m/cart/dmsShpp.ssg')" class="gnb_util_mn ty_cart clickable" data-react-tarea="웹공통_N|GNB|장바구니" onclick="javascript:setCommonGnbCookie('useGnbAdvertCk','',-1);">
			<i class="icon icon_cart">
				<span id="mHeaderCartNm" class="blind">장바구니</span>
			</i>
			<span class="cmnoti_cartshare" id="cmnoti_cartshare"><span class="blind">함께 장보기</span></span> <span class="cmnoti_push" id="cartCnt_header"><span class="blind" id="cartCntSpan">담은 상품 수</span></span>
		</a>
     );
}

export default ShoppingBasketButton;




