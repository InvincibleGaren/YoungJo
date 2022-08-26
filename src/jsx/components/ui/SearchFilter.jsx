import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../../css/components/SearchFilter.css"

function SearchFilter(props) {
    const url = "/allsearch";
    

    const [sortCheck, setSortCheck] = useState({
        visible: false,
        selected : "추천순",
    })

    const [filterCheck, setFilterCheck] = useState({
        visible: false
    })

    const sortItemClick = (e) => {
        // e.currentTarget.classList.toggle("active");
        console.log(props.State);
        console.log(e.currentTarget.textContent);
        props.setState({...props.State, sort: `&sort=${e.currentTarget.textContent}`})
     
    }

    return (  
        <ul id="SearchFilter" className="m_ncatetbl">
            <li class="view_td" data-areaid="view">
                <div class="posr">
                    <a href="javascript:void(0)" id="_btn_view_type_toggle" class="btn_t">
                    <span class="sp_view ico_thmb">이미지형</span>
                    </a>
                </div>
            </li>
            <li class="filter_td" data-areaid="order">
                <div class="in">
                    <div class="cmft_sel_wrap">
                        <span class="cmft_inp_chk">
                                    <input type="checkbox" id="ui_ship_view" value="magic_chk" checked="" /> 
                                </span>
                                <a href="#" class="cmft_sort_tit cmft_sel_curent">
                                    <span class="cmft_txt ty_emart">
                                        매장픽업</span>
                                </a>
                                <ul class="cmft_sel_lst">
                                    <li><a href="#" id="sd_store_chk" class="chk clickable" data-info="department"><span class="cmft_txt">백화점상품</span></a></li>
                                        <li><a href="#" id="magic_chk" class="chk clickable" data-info="picku"><span class="cmft_txt">매장픽업</span></a></li>
                                        </ul>
                            </div>
                </div>
            </li>
            <li class="rank_td" data-areaid="order">
                <div class="in">
                    <Link to="#" className="btn_t" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            setFilterCheck({...filterCheck, visible : false})
                            setSortCheck({...sortCheck, visible:!sortCheck.visible})
                        }}>{sortCheck.selected}<span class="sp_view ico_arrow">&nbsp;</span></Link>
                    {
                        sortCheck.visible && 
                            <ul class="mn_layer">
                                <li onClickCapture={sortItemClick}>
                                    <Link to={url+props.State.query+props.State.page+props.State.limit+props.State.sort+
                                                props.State.minPrice+props.State.maxPrice} 
                                        class="clickable">추천순</Link>
                                        <button onclick="alert('추천순 상품의 판매량과 정확도 등을 점수화하여 정렬하며, 광고상품의 경우 별도 기준으로 상단에 정렬됩니다.');" class="btn_info"><span class="blind"></span></button>                                
                                </li>
                                <li onClickCapture={sortItemClick} class="active">
                                    <Link to={url+props.State.query+props.State.page+props.State.limit+props.State.sort+
                                                props.State.minPrice+props.State.maxPrice} title="sale" class="clickable" data-info="sale">판매순</Link></li>
                                <li onClickCapture={sortItemClick} class="active">
                                    <Link to={url+props.State.query+props.State.page+props.State.limit+props.State.sort+
                                                props.State.minPrice+props.State.maxPrice} title="sale" class="clickable" data-info="sale">낮은가격</Link></li>
                                <li onClickCapture={sortItemClick} class="active">
                                    <Link to={url+props.State.query+props.State.page+props.State.limit+props.State.sort+
                                                props.State.minPrice+props.State.maxPrice} title="sale" class="clickable" data-info="sale">높은가격</Link></li>
                                <li onClickCapture={sortItemClick} class="active">
                                    <Link to={url+props.State.query+props.State.page+props.State.limit+props.State.sort+
                                                props.State.minPrice+props.State.maxPrice} title="sale" class="clickable" data-info="sale">신상품순</Link></li>
                                <li onClickCapture={sortItemClick} class="active">
                                    <Link to={url+props.State.query+props.State.page+props.State.limit+props.State.sort+
                                                props.State.minPrice+props.State.maxPrice} title="sale" class="clickable" data-info="sale">리뷰많은순</Link></li>

                                {/* <li><a title="prcasc" href="#" class="clickable" data-info="prcasc">낮은가격</a></li>
                                <li><a title="prcdsc" href="#" class="clickable" data-info="prcdsc">높은가격</a></li>
                                <li><a title="regdt" href="#" class="clickable" data-info="regdt">신상품순</a></li>
                                <li><a title="cnt" href="#" class="clickable" data-info="cnt">리뷰많은순</a></li> */}
                            </ul>
                    }

                </div>
            </li>
            <li class="sch_td">
                <div class="in">
                    <Link to="#" class="btn_t" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            setSortCheck({...sortCheck, visible:false})
                            setFilterCheck({...filterCheck, visible : !filterCheck.visible})
                        }}>필터<span class="sp_view ico_arrow">&nbsp;</span></Link>
                    {
                        filterCheck.visible &&
                        <div class="m_ds_pos">
                            <div class="m_schmid" id="m_schmid">
                                <div class="detail_schwrap">
                                    <div class="detail_sch" data-areaid="category">
                                        <span class="tit">카테고리</span>
                                        <div class="ds_cont">
                                            <span class="des_select">
                                                <span class="cc_ellip_in selected" id="category_select">전체</span>
                                                <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                <span class="hide_select">
                                                    <label for="category">카테고리 선택</label>
                                                    <select id="category" title="옵션"><option value="all">전체</option><option value="6000200799" title="가방/지갑" class="clickable" data-info="6000200799">가방/지갑</option><option value="6000200803" title="명품잡화/아이웨어" class="clickable" data-info="6000200803">명품잡화/아이웨어</option><option value="6000205354" title="스포츠웨어/용품" class="clickable" data-info="6000205354">스포츠웨어/용품</option><option value="6000209194" title="컴퓨터/노트북/태블릿" class="clickable" data-info="6000209194">컴퓨터/노트북/태블릿</option><option value="6000205357" title="골프웨어/용품/클럽" class="clickable" data-info="6000205357">골프웨어/용품/클럽</option><option value="6000178523" title="주방용품" class="clickable" data-info="6000178523">주방용품</option><option value="6000211273" title="문구/미술/사무용품" class="clickable" data-info="6000211273">문구/미술/사무용품</option><option value="6000205356" title="캠핑/낚시용품" class="clickable" data-info="6000205356">캠핑/낚시용품</option><option value="6000209203" title="휴대폰/스마트기기" class="clickable" data-info="6000209203">휴대폰/스마트기기</option><option value="6000163573" title="유아동신발/잡화" class="clickable" data-info="6000163573">유아동신발/잡화</option><option value="6000200801" title="슈즈/운동화" class="clickable" data-info="6000200801">슈즈/운동화</option><option value="6000205355" title="등산/아웃도어" class="clickable" data-info="6000205355">등산/아웃도어</option><option value="6000178524" title="청소/욕실/공구" class="clickable" data-info="6000178524">청소/욕실/공구</option><option value="6000189224" title="여성브랜드패션" class="clickable" data-info="6000189224">여성브랜드패션</option><option value="6000178525" title="생활/건강" class="clickable" data-info="6000178525">생활/건강</option><option value="6000163570" title="완구/교구" class="clickable" data-info="6000163570">완구/교구</option><option value="6000177371" title="조명/인테리어소품" class="clickable" data-info="6000177371">조명/인테리어소품</option><option value="6000185640" title="반려동물용품" class="clickable" data-info="6000185640">반려동물용품</option><option value="6000189392" title="남성패션" class="clickable" data-info="6000189392">남성패션</option><option value="6000189308" title="여성트렌드패션" class="clickable" data-info="6000189308">여성트렌드패션</option><option value="6000201547" title="명품/수입의류" class="clickable" data-info="6000201547">명품/수입의류</option><option value="6000200800" title="모자/장갑/ACC" class="clickable" data-info="6000200800">모자/장갑/ACC</option><option value="6000209199" title="내비/블랙박스/차량용품" class="clickable" data-info="6000209199">내비/블랙박스/차량용품</option><option value="6000205360" title="구기/라켓스포츠" class="clickable" data-info="6000205360">구기/라켓스포츠</option><option value="6000205361" title="수영/수상레저" class="clickable" data-info="6000205361">수영/수상레저</option><option value="6000205358" title="자전거/스케이트/롤러" class="clickable" data-info="6000205358">자전거/스케이트/롤러</option><option value="6000139025" title="유제품/과자/빵/음료/주류" class="clickable" data-info="6000139025">유제품/과자/빵/음료/주류</option><option value="6000189500" title="캐주얼/유니섹스" class="clickable" data-info="6000189500">캐주얼/유니섹스</option><option value="6000200802" title="시계/쥬얼리" class="clickable" data-info="6000200802">시계/쥬얼리</option><option value="6000210596" title="도서" class="clickable" data-info="6000210596">도서</option><option value="6000163572" title="아동/주니어패션" class="clickable" data-info="6000163572">아동/주니어패션</option><option value="6000139864" title="반찬/간편식/조미료" class="clickable" data-info="6000139864">반찬/간편식/조미료</option><option value="6000139026" title="홍삼/건강식품" class="clickable" data-info="6000139026">홍삼/건강식품</option><option value="6000209197" title="카메라/캠코더" class="clickable" data-info="6000209197">카메라/캠코더</option><option value="6000177367" title="침구/커튼/카페트" class="clickable" data-info="6000177367">침구/커튼/카페트</option><option value="6000163568" title="출산/육아용품" class="clickable" data-info="6000163568">출산/육아용품</option><option value="6000189453" title="언더웨어" class="clickable" data-info="6000189453">언더웨어</option><option value="6000177368" title="침실/수납가구" class="clickable" data-info="6000177368">침실/수납가구</option><option value="6000205359" title="헬스/요가/격투기" class="clickable" data-info="6000205359">헬스/요가/격투기</option><option value="6000193743" title="향수" class="clickable" data-info="6000193743">향수</option><option value="6000163571" title="신생아/유아패션" class="clickable" data-info="6000163571">신생아/유아패션</option><option value="6000139023" title="수산물/건해산" class="clickable" data-info="6000139023">수산물/건해산</option><option value="6000018405" title="취미/키덜트" class="clickable" data-info="6000018405">취미/키덜트</option><option value="6000139022" title="정육/계란류" class="clickable" data-info="6000139022">정육/계란류</option><option value="6000209196" title="PC주변기기/저장장치" class="clickable" data-info="6000209196">PC주변기기/저장장치</option><option value="6000163569" title="유모차/카시트/실내용품" class="clickable" data-info="6000163569">유모차/카시트/실내용품</option><option value="6000177370" title="서재/학생아동가구" class="clickable" data-info="6000177370">서재/학생아동가구</option><option value="6000139021" title="과일/채소/쌀" class="clickable" data-info="6000139021">과일/채소/쌀</option><option value="3500000958" title="악기" class="clickable" data-info="3500000958">악기</option><option value="6000193747" title="미용기기/소품" class="clickable" data-info="6000193747">미용기기/소품</option><option value="6000177372" title="DIY/시공" class="clickable" data-info="6000177372">DIY/시공</option><option value="6000185643" title="관상어용품" class="clickable" data-info="6000185643">관상어용품</option><option value="6000185638" title="강아지사료/간식" class="clickable" data-info="6000185638">강아지사료/간식</option><option value="6000177369" title="거실/주방가구" class="clickable" data-info="6000177369">거실/주방가구</option><option value="6000193745" title="바디케어" class="clickable" data-info="6000193745">바디케어</option><option value="6000209200" title="냉장고/주방가전" class="clickable" data-info="6000209200">냉장고/주방가전</option><option value="6000209202" title="영상/음향가전" class="clickable" data-info="6000209202">영상/음향가전</option><option value="6000193742" title="스킨케어" class="clickable" data-info="6000193742">스킨케어</option><option value="6000163567" title="기저귀/물티슈/분유/유아식" class="clickable" data-info="6000163567">기저귀/물티슈/분유/유아식</option><option value="6000209198" title="에어컨/계절가전" class="clickable" data-info="6000209198">에어컨/계절가전</option><option value="6000209195" title="게임/타이틀" class="clickable" data-info="6000209195">게임/타이틀</option><option value="6000185639" title="고양이사료/간식" class="clickable" data-info="6000185639">고양이사료/간식</option><option value="6000193744" title="헤어케어" class="clickable" data-info="6000193744">헤어케어</option><option value="6000193746" title="메이크업" class="clickable" data-info="6000193746">메이크업</option><option value="6000209201" title="세탁기/생활가전" class="clickable" data-info="6000209201">세탁기/생활가전</option><option value="6000083312" title="음반/DVD" class="clickable" data-info="6000083312">음반/DVD</option><option value="6000185642" title="소동물/곤충/조류" class="clickable" data-info="6000185642">소동물/곤충/조류</option><option value="6000205362" title="스키/보드" class="clickable" data-info="6000205362">스키/보드</option><option value="6000203402" title="렌탈" class="clickable" data-info="6000203402">렌탈</option><option value="3000001210" title="여행/호텔/레저" class="clickable" data-info="3000001210">여행/호텔/레저</option><option value="6000211386" title="e쿠폰/상품권" class="clickable" data-info="6000211386">e쿠폰/상품권</option><option value="6000211373" title="서비스" class="clickable" data-info="6000211373">서비스</option></select>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="detail_sch" data-areaid="brand">
                                        <span class="tit">브랜드</span>
                                        <div class="ds_cont">
                                            <span class="des_select">
                                                <span class="cc_ellip_in" id="brand_select">전체</span>
                                                <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                <span class="hide_select">
                                                    <label for="brand">브랜드 선택</label>
                                                    <select id="brand" title="옵션" multiple="multiple" data-defaultvalue="전체">
                                                    <option value="2000005360" title="프라다(PRADA)">프라다(PRADA)(4,639)</option>
                                                    <option value="2000003765" title="키플링">키플링(8,002)</option>
                                                    <option value="3000044676" title="제이큐">제이큐(136,293)</option>
                                                    <option value="3000034082" title="오너클랜">오너클랜(79,292)</option>
                                                    <option value="2000047517" title="텐바이텐">텐바이텐(25,862)</option>
                                                    <option value="3000024073" title="1300K">1300K(25,073)</option>
                                                    <option value="2011015363" title="바보사랑">바보사랑(19,118)</option>
                                                    <option value="3000020646" title="로제이">로제이(11,831)</option>
                                                    <option value="2011000116" title="빌리버스(BELIVUS)">빌리버스(BELIVUS)(9,964)</option>
                                                    <option value="2000017754" title="아트박스">아트박스(9,904)</option>
                                                    <option value="3000008058" title="핫트랙스">핫트랙스(7,888)</option>
                                                    <option value="3000045811" title="도토로">도토로(7,545)</option>
                                                    <option value="3000029842" title="멜팅브라운">멜팅브라운(5,879)</option>
                                                    <option value="3000038069" title="옷자락">옷자락(5,857)</option>
                                                    <option value="3000003316" title="엘케이트">엘케이트(5,578)</option>
                                                    <option value="3000043839" title="셀러허브_잡화">셀러허브_잡화(5,535)</option>
                                                    <option value="3000047116" title="디작소">디작소(4,717)</option>
                                                    <option value="2000017275" title="아메리칸투어리스터">아메리칸투어리스터(4,653)</option>
                                                    <option value="2000000901" title="보테가베네타(BOTTEGA VENETA)">보테가베네타(BOTTEGA ...(4,452)</option>
                                                    <option value="2000007138" title="발렌티노(VALENTINO)">발렌티노(VALENTINO)(4,313)</option>
                                                    <option value="2000007635" title="SAINT LAURENT(생로랑)">SAINT LAURENT(생...(4,253)</option>
                                                    <option value="3000044151" title="셀러허브라이프샵">셀러허브라이프샵(4,228)</option>
                                                    <option value="2011000743" title="허쉘">허쉘(4,009)</option>
                                                    <option value="3000005169" title="스콰즈(SQUAZ)">스콰즈(SQUAZ)(3,890)</option>
                                                    <option value="2000024915" title="현대모비스">현대모비스(3,788)</option>
                                                    <option value="3000032624" title="FROMSHOE">FROMSHOE(3,716)</option>
                                                    <option value="2010036894" title="MARNI(마르니)">MARNI(마르니)(3,681)</option>
                                                    <option value="2011015098" title="BALENCIAGA[발렌시아가]">BALENCIAGA[발렌시아...(3,312)</option>
                                                    <option value="3000056589" title="다잇템">다잇템(3,297)</option>
                                                    <option value="2000000539" title="알렉산더맥퀸(Alexander McQueen)">알렉산더맥퀸(Alexande...(3,240)</option>
                                                    <option value="3000055013" title="오슈">오슈(3,213)</option>
                                                    <option value="2000002240" title="Elegance">Elegance(3,052)</option>
                                                    <option value="2000000507" title="Adidas">Adidas(3,025)</option>
                                                    <option value="2000006762" title="토리버치(TORY BURCH)">토리버치(TORY BURCH...(2,972)</option>
                                                    <option value="3000029302" title="마리엔코코">마리엔코코(2,887)</option>
                                                    <option value="3000032850" title="포지시아">포지시아(2,815)</option>
                                                    <option value="2000004308" title="마이클코어스">마이클코어스(2,651)</option>
                                                    <option value="3000028388" title="디자이어로즈">디자이어로즈(2,623)</option>
                                                    <option value="2000004827" title="나이키">나이키(2,604)</option>
                                                    <option value="2000000167" title="A.P.C">A.P.C(2,577)</option>
                                                    <option value="2011001040" title="니꼴밀러">니꼴밀러(2,527)</option>
                                                    <option value="2000001288" title="끌로에(CHLOE)">끌로에(CHLOE)(2,431)</option>
                                                    <option value="3000039238" title="스펙플러스">스펙플러스(2,414)</option>
                                                    <option value="2000002166" title="에트로(ETRO)">에트로(ETRO)(2,257)</option>
                                                    <option value="2000049311" title="닥스핸드백">닥스핸드백(2,254)</option>
                                                    <option value="2000006479" title="스텔라맥카트니(Stella McCartney)">스텔라맥카트니(Stella ...(2,211)</option>
                                                    <option value="2000005405" title="푸마(PUMA)">푸마(PUMA)(2,191)</option>
                                                    <option value="2000002649" title="지방시(GIVENCHY)">지방시(GIVENCHY)(2,124)</option>
                                                    <option value="2011013741" title="코지">코지(1,995)</option>
                                                    <option value="2000004206" title="마크제이콥스(MARC JACOBS)">마크제이콥스(MARC JAC...(1,983)</option>
                                                    <option value="3000019771" title="멀버리 (Mulberry)">멀버리 (Mulberry)(1,957)</option>
                                                    <option value="3000045986" title="퀼트스타">퀼트스타(1,954)</option>
                                                    <option value="3000039508" title="osjarak">osjarak(1,884)</option>
                                                    <option value="3000005078" title="ETRO(에트로)">ETRO(에트로)(1,861)</option>
                                                    <option value="2000003953" title="롱샴(LONGCHAMP)">롱샴(LONGCHAMP)(1,854)</option>
                                                    <option value="2011015410" title="뉴발란스(NEW BALANCE)">뉴발란스(NEW BALANC...(1,836)</option>
                                                    <option value="2000002326" title="펜디(FENDI)">펜디(FENDI)(1,835)</option>
                                                    <option value="2011015508" title="언더아머(UNDER ARMOUR)">언더아머(UNDER ARMO...(1,829)</option>
                                                    <option value="2000005276" title="피에르가르뎅">피에르가르뎅(1,689)</option>
                                                    <option value="3000019166" title="메종마르지엘라">메종마르지엘라(1,651)</option>
                                                    <option value="2000001740" title="데상트">데상트(1,575)</option>
                                                    <option value="3000058121" title="비씨디">비씨디(1,556)</option>
                                                    <option value="2000000508" title="아디다스">아디다스(1,554)</option>
                                                    <option value="2000004058" title="레스포색(LeSportsac)">레스포색(LeSportsac...(1,526)</option>
                                                    <option value="2000006339" title="쌤소나이트">쌤소나이트(1,492)</option>
                                                    <option value="2011014441" title="톰브라운(THOM BROWNE)">톰브라운(THOM BROWN...(1,456)</option>
                                                    <option value="3000051892" title="코지23(cosy23)">코지23(cosy23)(1,422)</option>
                                                    <option value="2000002338" title="휠라(FILA)">휠라(FILA)(1,394)</option>
                                                    <option value="2000001354" title="코치(COACH)">코치(COACH)(1,351)</option>
                                                    <option value="2000000603" title="앤클라인">앤클라인(1,346)</option>
                                                    <option value="2011014489" title="아레나">아레나(1,316)</option>
                                                    <option value="2000030648" title="쿠론(COURONNE)">쿠론(COURONNE)(1,300)</option>
                                                    <option value="1010770284" title="ADIDAS">ADIDAS(1,299)</option>
                                                    <option value="1010770245" title="NIKE">NIKE(1,283)</option>
                                                    <option value="3000049423" title="ELEGANCE acc">ELEGANCE acc(1,264)</option>
                                                    <option value="3000004088" title="MCN">MCN(1,251)</option>
                                                    <option value="2000001165" title="캘러웨이">캘러웨이(1,235)</option>
                                                    <option value="2000003942" title="LOEWE">LOEWE(1,233)</option>
                                                    <option value="3000045139" title="에피소드블랑셀러허브">에피소드블랑셀러허브(1,200)</option>
                                                    <option value="2000002532" title="훌라(FURLA)">훌라(FURLA)(1,194)</option>
                                                    <option value="3000025893" title="바이파(by FAR)">바이파(by FAR)(1,178)</option>
                                                    <option value="2000001816" title="돌체앤가바나 (D&amp;G)">돌체앤가바나 (D&amp;G)(1,170)</option>
                                                    <option value="2011002859" title="까스텔바작(CASTELBAJAC)">까스텔바작(CASTELBAJ...(1,167)</option>
                                                    <option value="2000023774" title="프로스펙스">프로스펙스(1,157)</option>
                                                    <option value="2000000698" title="발리(BALLY)">발리(BALLY)(1,145)</option>
                                                    <option value="3000016223" title="KMG">KMG(1,095)</option>
                                                    <option value="3000044666" title="에피소드블랑(Episodeblanc)">에피소드블랑(Episodeb...(1,081)</option>
                                                    <option value="2011000679" title="캐스키드슨">캐스키드슨(1,065)</option>
                                                    <option value="3000028853" title="굿즈트리">굿즈트리(1,063)</option>
                                                    <option value="2011000234" title="교보문고">교보문고(1,054)</option>
                                                    <option value="2000004369" title="미우미우(MIUMIU)">미우미우(MIUMIU)(1,052)</option>
                                                    <option value="2000003414" title="JIL SANDER">JIL SANDER(1,028)</option>
                                                    <option value="3000006560" title="아이콘팜">아이콘팜(1,002)</option>
                                                    <option value="3000035106" title="ANNE KLEIN_BAG">ANNE KLEIN_BAG(991)</option>
                                                    <option value="2011015346" title="DI CUBO(디꾸보)">DI CUBO(디꾸보)(978)</option>
                                                    <option value="2000007235" title="비비안웨스트우드">비비안웨스트우드(969)</option>
                                                    <option value="2000013798" title="미즈노">미즈노(969)</option>
                                                    <option value="2000006574" title="탠디(TANDY)">탠디(TANDY)(968)</option>
                                                    <option value="3000037546" title="프롬헤븐">프롬헤븐(965)</option>
                                                    </select>
                                                </span>
                                            </span>
                                            <ul class="ds_schlist"></ul>
                                        </div>
                                    </div>
                                    <div class="detail_sch" data-areaid="cls">
                                            <span class="tit">상품유형</span>
                                            <div class="ds_cont">
                                                <span class="des_select">
                                                    <span class="cc_ellip_in" id="cls_select">전체</span>
                                                    <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                    <span class="hide_select">
                                                        <label for="cls">상품유형 선택</label>
                                                        <select id="cls" title="옵션" multiple="multiple" data-defaultvalue="전체">
                                                            <option value="department" title="백화점상품">백화점상품</option>
                                                                <option value="usedgood" title="중고상품">중고상품</option>
                                                                </select>
                                                    </span>
                                                </span>
                                                <ul class="ds_schlist"></ul>
                                            </div>
                                        </div>
                                        <div class="detail_sch" data-areaid="shpp">
                                            <span class="tit">배송유형</span>
                                            <div class="ds_cont">
                                                <span class="des_select">
                                                    <span class="cc_ellip_in selected" id="shpp_select">전체</span>
                                                    <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                    <span class="hide_select">
                                                        <label for="shpp">배송유형 선택</label>
                                                        <select id="shpp" title="옵션">
                                                        <option value="all">전체</option>
                                                        <option value="picku" title="매장픽업" class="clickable" data-info="picku">매장픽업</option>
                                                                <option value="qshpp" title="퀵배송" class="clickable" data-info="qshpp">퀵배송</option>
                                                                <option value="con" title="모바일쿠폰" class="clickable" data-info="con">모바일쿠폰</option>
                                                                <option value="direct" title="해외직구" class="clickable" data-info="direct">해외직구</option>
                                                                </select>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="detail_sch">
                                            <span class="tit">혜택</span>
                                            <div class="ds_cont">
                                                <span class="des_select">
                                                    <span class="cc_ellip_in" id="filter_select">전체</span>
                                                    <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                    <span class="hide_select">
                                                        <label for="filter">혜택 선택</label>
                                                        <select id="filter" title="옵션" multiple="multiple" data-defaultvalue="전체">
                                                            <option value="obanjang|spprice" title="특가상품">특가상품</option>
                                                            <option value="dscnt" title="쿠폰/에누리">쿠폰/에누리</option>
                                                            <option value="dsale" title="백화점세일">백화점세일</option>
                                                            <option value="free" title="무료배송">무료배송</option>
                                                            </select>
                                                    </span>
                                                </span>
                                                <ul class="ds_schlist"></ul>
                                            </div>
                                        </div>
                                    <div class="detail_sch">
                                        <span class="tit">백화점상품</span>
                                        <div class="ds_cont">
                                            <span class="des_select">
                                                <span class="cc_ellip_in selected" id="salestrNo_select">전체</span>
                                                <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                <span class="hide_select">
                                                    <label for="salestrNo">백화점점포 선택</label>
                                                    <select id="salestrNo" title="옵션">
                                                        <option value="all">전체</option>
                                                        <option value="1002" name="salestrNo">본점</option>
                                                        <option value="1004" name="salestrNo">강남점</option>
                                                        <option value="1006" name="salestrNo">경기점</option>
                                                        <option value="1009" name="salestrNo">센텀시티점</option>
                                                        <option value="1013" name="salestrNo">타임스퀘어점패션관</option>
                                                        <option value="1003" name="salestrNo">타임스퀘어점리빙관</option>
                                                        <option value="1007" name="salestrNo">의정부점</option>
                                                        <option value="1008" name="salestrNo">광주신세계</option>
                                                        <option value="1010" name="salestrNo">마산점</option>
                                                        <option value="1011" name="salestrNo">천안아산점</option>
                                                        <option value="1017" name="salestrNo">김해점</option>
                                                        <option value="1018" name="salestrNo">하남점</option>
                                                        <option value="1019" name="salestrNo">대구신세계</option>
                                                        <option value="1024" name="salestrNo">대전신세계</option>
                                                    </select>
                                                </span>
                                            </span>
                                            <ul class="ds_schlist"></ul>
                                        </div>
                                    </div>
                                    <div class="detail_sch">
                                            <span class="tit">가격</span>
                                            <div class="ds_cont">
                                                <span class="des_select">
                                                    <span class="cc_ellip_in selected" id="price_select">전체</span>
                                                    <span class="sp_com_v2 sel_arrow">&nbsp;</span>
                                                    <span class="hide_select">
                                                        <label for="lf_like">가격 선택</label>
                                                        <select id="price" title="옵션">
                                                            <option value="all">전체</option>
                                                            

                                                                dvdPrc :: 10000
                                                                dvdMinPrcLong :: 0.0
                                                                dvdMaxPrcLong :: 2.0
                                                                dvdMinUnit :: 0
                                                                dvdMinUnit1 :: 00000
                                                                dvdMaxUnit :: 20000
                                                                dvdMaxUnit1 :: 20000
                                                                dvdMinPrc :: 0
                                                                dvdMaxPrc :: 2

                                                                <option value="0-20000" title="0">~ 2만원</option>
                                                                        

                                                                dvdPrc :: 10000
                                                                dvdMinPrcLong :: 2.0
                                                                dvdMaxPrcLong :: 5.0
                                                                dvdMinUnit :: 20000
                                                                dvdMinUnit1 :: 20000
                                                                dvdMaxUnit :: 50000
                                                                dvdMaxUnit1 :: 50000
                                                                dvdMinPrc :: 2
                                                                dvdMaxPrc :: 5

                                                                <option value="20000-50000" title="1">2만원 ~ 5만원</option>
                                                                        

                                                                dvdPrc :: 10000
                                                                dvdMinPrcLong :: 5.0
                                                                dvdMaxPrcLong :: 18.0
                                                                dvdMinUnit :: 50000
                                                                dvdMinUnit1 :: 50000
                                                                dvdMaxUnit :: 180000
                                                                dvdMaxUnit1 :: 180000
                                                                dvdMinPrc :: 5
                                                                dvdMaxPrc :: 18

                                                                <option value="50000-180000" title="2">5만원 ~ 18만원</option>
                                                                        

                                                                dvdPrc :: 10000
                                                                dvdMinPrcLong :: 18.0
                                                                dvdMaxPrcLong :: 6349.0
                                                                dvdMinUnit :: 180000
                                                                dvdMinUnit1 :: 180000
                                                                dvdMaxUnit :: 6
                                                                dvdMaxUnit1 :: 63490000
                                                                dvdMinPrc :: 18
                                                                dvdMaxPrc :: 6,349

                                                                <option value="180000-6" title="3">18만원 ~ 6,349만원</option>
                                                                        </select>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                <ul class="bnbox">
                                <li><a href="#" class="bn_gray2">선택초기화</a></li>
                                <li><a href="#" class="bn_pnk2">선택적용</a></li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </li>
        </ul>
    );
}

export default SearchFilter;