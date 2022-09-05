import React from 'react'

function FilterCategory() {
  return (
    <div>
        <div className="m_scharea m_scharea_malltab">
            <div className="sch_search_options">
                <div className="sch_filter_view">
                    <div className="m_ncatetblarea">
                        <ul className="m_ncatetbl">
                            <li className="view_td" data-areaid="view">
                                <div className="posr">
                                    <a href="javascript:void(0)" id="_btn_view_type_toggle" className="btn_t">
                                    <span className="sp_view ico_thmb">이미지형</span>
                                    </a>
                                </div>
                            </li>
                            <li className="filter_td" data-areaid="order">
                                <div className="in">
                                    <div className="cmft_sel_wrap">
                                        <span className="cmft_inp_chk">
                                            <input type="checkbox" id="ui_ship_view" value="sd_store_chk"/>
                                        </span>
                                        <a href="#" className="cmft_sort_tit cmft_sel_curent">
                                            <span className="cmft_txt ty_emart">
                                                백화점상품</span>
                                        </a>
                                        <ul className="cmft_sel_lst">
                                            <li><a href="#" id="sd_store_chk" className="chk clickable" data-info="department"><span className="cmft_txt">백화점상품</span></a></li>
                                            <li><a href="#" id="magic_chk" className="chk clickable" data-info="picku"><span className="cmft_txt">매장픽업</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="rank_td" data-areaid="order">
                                <div className="in">
                                    <a href="#" className="btn_t">추천순<span className="sp_view ico_arrow">&nbsp;</span></a>
                                    <ul className="mn_layer">
                                        <li className="active">
                                            <a href="#" className="clickable" data-info="best">추천순</a>
                                            <button onclick="alert('추천순 상품의 판매량과 정확도 등을 점수화하여 정렬하며, 광고상품의 경우 별도 기준으로 상단에 정렬됩니다.');" className="btn_info"><span className="blind">추천순 설명 보기</span></button>
                                        </li>
                                        <li><a title="sale" href="#" className="clickable" data-info="sale">판매량순</a></li>
                                        <li><a title="prcasc" href="#" className="clickable" data-info="prcasc">낮은가격순</a></li>
                                        <li><a title="prcdsc" href="#" className="clickable" data-info="prcdsc">높은가격순</a></li>
                                        <li><a title="dcrt" href="#" className="clickable" data-info="dcrt">할인율순</a></li>
                                        <li><a title="regdt" href="#" className="clickable" data-info="regdt">신상품순</a></li>
                                        <li><a title="cnt" href="#" className="clickable" data-info="cnt">리뷰많은순</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="sch_td">
                                <div className="in">
                                    <a href="#" className="btn_t">필터<span className="sp_view ico_arrow">&nbsp;</span></a>
                                    <div className="m_ds_pos">
                                        <div className="m_schmid" id="m_schmid">
                                            <div className="detail_schwrap">
                                                <div className="detail_sch" data-areaid="category">
                                                    <span className="tit">카테고리</span>
                                                    <div className="ds_cont">
                                                        <span className="des_select">
                                                            <span className="cc_ellip_in selected" id="category_select">전체</span>
                                                            <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                            <span className="hide_select">
                                                                <label for="category">카테고리 선택</label>
                                                                <select id="category" title="옵션"><option value="all">전체</option><option value="6000209196" title="PC주변기기/저장장치" className="clickable" data-info="6000209196">PC주변기기/저장장치</option><option value="6000185640" title="반려동물용품" className="clickable" data-info="6000185640">반려동물용품</option><option value="6000178523" title="주방용품" className="clickable" data-info="6000178523">주방용품</option><option value="6000211273" title="문구/미술/사무용품" className="clickable" data-info="6000211273">문구/미술/사무용품</option><option value="6000209203" title="휴대폰/스마트기기" className="clickable" data-info="6000209203">휴대폰/스마트기기</option><option value="6000178524" title="청소/욕실/공구" className="clickable" data-info="6000178524">청소/욕실/공구</option><option value="6000178525" title="생활/건강" className="clickable" data-info="6000178525">생활/건강</option><option value="6000185638" title="강아지사료/간식" className="clickable" data-info="6000185638">강아지사료/간식</option><option value="6000139025" title="유제품/과자/빵/음료/주류" className="clickable" data-info="6000139025">유제품/과자/빵/음료/주류</option><option value="6000139864" title="반찬/간편식/조미료" className="clickable" data-info="6000139864">반찬/간편식/조미료</option><option value="6000177371" title="조명/인테리어소품" className="clickable" data-info="6000177371">조명/인테리어소품</option><option value="6000209194" title="컴퓨터/노트북/태블릿" className="clickable" data-info="6000209194">컴퓨터/노트북/태블릿</option><option value="6000139026" title="홍삼/건강식품" className="clickable" data-info="6000139026">홍삼/건강식품</option><option value="6000189453" title="언더웨어" className="clickable" data-info="6000189453">언더웨어</option><option value="6000209199" title="내비/블랙박스/차량용품" className="clickable" data-info="6000209199">내비/블랙박스/차량용품</option><option value="6000177367" title="침구/커튼/카페트" className="clickable" data-info="6000177367">침구/커튼/카페트</option><option value="6000163570" title="완구/교구" className="clickable" data-info="6000163570">완구/교구</option><option value="6000193742" title="스킨케어" className="clickable" data-info="6000193742">스킨케어</option><option value="6000193745" title="바디케어" className="clickable" data-info="6000193745">바디케어</option><option value="6000200799" title="가방/지갑" className="clickable" data-info="6000200799">가방/지갑</option><option value="6000200800" title="모자/장갑/ACC" className="clickable" data-info="6000200800">모자/장갑/ACC</option><option value="6000200802" title="시계/쥬얼리" className="clickable" data-info="6000200802">시계/쥬얼리</option><option value="6000185639" title="고양이사료/간식" className="clickable" data-info="6000185639">고양이사료/간식</option><option value="6000205357" title="골프웨어/용품/클럽" className="clickable" data-info="6000205357">골프웨어/용품/클럽</option><option value="6000205356" title="캠핑/낚시용품" className="clickable" data-info="6000205356">캠핑/낚시용품</option><option value="6000163568" title="출산/육아용품" className="clickable" data-info="6000163568">출산/육아용품</option><option value="6000163567" title="기저귀/물티슈/분유/유아식" className="clickable" data-info="6000163567">기저귀/물티슈/분유/유아식</option><option value="6000205354" title="스포츠웨어/용품" className="clickable" data-info="6000205354">스포츠웨어/용품</option><option value="6000210596" title="도서" className="clickable" data-info="6000210596">도서</option><option value="6000177372" title="DIY/시공" className="clickable" data-info="6000177372">DIY/시공</option><option value="6000193744" title="헤어케어" className="clickable" data-info="6000193744">헤어케어</option><option value="6000163572" title="아동/주니어패션" className="clickable" data-info="6000163572">아동/주니어패션</option><option value="6000200801" title="슈즈/운동화" className="clickable" data-info="6000200801">슈즈/운동화</option><option value="6000189224" title="여성브랜드패션" className="clickable" data-info="6000189224">여성브랜드패션</option><option value="6000189392" title="남성패션" className="clickable" data-info="6000189392">남성패션</option><option value="6000189308" title="여성트렌드패션" className="clickable" data-info="6000189308">여성트렌드패션</option><option value="6000177368" title="침실/수납가구" className="clickable" data-info="6000177368">침실/수납가구</option><option value="6000209200" title="냉장고/주방가전" className="clickable" data-info="6000209200">냉장고/주방가전</option><option value="6000205359" title="헬스/요가/격투기" className="clickable" data-info="6000205359">헬스/요가/격투기</option><option value="6000139021" title="과일/채소/쌀" className="clickable" data-info="6000139021">과일/채소/쌀</option><option value="6000209197" title="카메라/캠코더" className="clickable" data-info="6000209197">카메라/캠코더</option><option value="6000185642" title="소동물/곤충/조류" className="clickable" data-info="6000185642">소동물/곤충/조류</option><option value="6000163571" title="신생아/유아패션" className="clickable" data-info="6000163571">신생아/유아패션</option><option value="6000018405" title="취미/키덜트" className="clickable" data-info="6000018405">취미/키덜트</option><option value="6000201547" title="명품/수입의류" className="clickable" data-info="6000201547">명품/수입의류</option><option value="6000205360" title="구기/라켓스포츠" className="clickable" data-info="6000205360">구기/라켓스포츠</option><option value="6000200803" title="명품잡화/아이웨어" className="clickable" data-info="6000200803">명품잡화/아이웨어</option><option value="6000193747" title="미용기기/소품" className="clickable" data-info="6000193747">미용기기/소품</option><option value="6000205355" title="등산/아웃도어" className="clickable" data-info="6000205355">등산/아웃도어</option><option value="6000163573" title="유아동신발/잡화" className="clickable" data-info="6000163573">유아동신발/잡화</option><option value="6000209198" title="에어컨/계절가전" className="clickable" data-info="6000209198">에어컨/계절가전</option><option value="6000193746" title="메이크업" className="clickable" data-info="6000193746">메이크업</option><option value="6000177369" title="거실/주방가구" className="clickable" data-info="6000177369">거실/주방가구</option><option value="6000163569" title="유모차/카시트/실내용품" className="clickable" data-info="6000163569">유모차/카시트/실내용품</option><option value="6000209202" title="영상/음향가전" className="clickable" data-info="6000209202">영상/음향가전</option><option value="6000177370" title="서재/학생아동가구" className="clickable" data-info="6000177370">서재/학생아동가구</option><option value="6000139023" title="수산물/건해산" className="clickable" data-info="6000139023">수산물/건해산</option><option value="6000189500" title="캐주얼/유니섹스" className="clickable" data-info="6000189500">캐주얼/유니섹스</option><option value="6000205358" title="자전거/스케이트/롤러" className="clickable" data-info="6000205358">자전거/스케이트/롤러</option><option value="6000185643" title="관상어용품" className="clickable" data-info="6000185643">관상어용품</option><option value="6000139022" title="정육/계란류" className="clickable" data-info="6000139022">정육/계란류</option><option value="6000205361" title="수영/수상레저" className="clickable" data-info="6000205361">수영/수상레저</option><option value="6000193743" title="향수" className="clickable" data-info="6000193743">향수</option><option value="6000209201" title="세탁기/생활가전" className="clickable" data-info="6000209201">세탁기/생활가전</option><option value="6000209195" title="게임/타이틀" className="clickable" data-info="6000209195">게임/타이틀</option><option value="6000083312" title="음반/DVD" className="clickable" data-info="6000083312">음반/DVD</option><option value="3500000958" title="악기" className="clickable" data-info="3500000958">악기</option><option value="6000203402" title="렌탈" className="clickable" data-info="6000203402">렌탈</option><option value="6000205362" title="스키/보드" className="clickable" data-info="6000205362">스키/보드</option><option value="6000211386" title="e쿠폰/상품권" className="clickable" data-info="6000211386">e쿠폰/상품권</option><option value="6000211373" title="서비스" className="clickable" data-info="6000211373">서비스</option><option value="3000001210" title="여행/호텔/레저" className="clickable" data-info="3000001210">여행/호텔/레저</option><option value="6000185641" title="반려동물서비스" className="clickable" data-info="6000185641">반려동물서비스</option></select>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="detail_sch" data-areaid="brand">
                                                    <span className="tit">브랜드</span>
                                                    <div className="ds_cont">
                                                        <span className="des_select">
                                                            <span className="cc_ellip_in" id="brand_select">전체</span>
                                                            <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                            <span className="hide_select">
                                                                <label for="brand">브랜드 선택</label>
                                                                <select id="brand" title="옵션" multiple="multiple" data-defaultvalue="전체">
                                                                    <option value="3000044676" title="제이큐">제이큐(249,658)</option>
                                                                    <option value="3000034082" title="오너클랜">오너클랜(109,085)</option>
                                                                    <option value="2011015363" title="바보사랑">바보사랑(57,565)</option>
                                                                    <option value="2000047517" title="텐바이텐">텐바이텐(54,297)</option>
                                                                    <option value="3000024073" title="1300K">1300K(37,698)</option>
                                                                    <option value="3000008058" title="핫트랙스">핫트랙스(30,063)</option>
                                                                    <option value="2000017754" title="아트박스">아트박스(24,564)</option>
                                                                    <option value="2011015205" title="와인앤쿡">와인앤쿡(10,064)</option>
                                                                    <option value="3000039304" title="WINE&amp;QOK">WINE&amp;QOK(8,606)</option>
                                                                    <option value="3000004381" title="Healing Shield">Healing Shield(8,406)</option>
                                                                    <option value="2000024915" title="현대모비스">현대모비스(6,858)</option>
                                                                    <option value="3000058072" title="리디아넬_셀러허브">리디아넬_셀러허브(6,791)</option>
                                                                    <option value="3000021170" title="스토어봄">스토어봄(5,873)</option>
                                                                    <option value="3000022725" title="베락스">베락스(5,358)</option>
                                                                    <option value="3000036617" title="펫스토어">펫스토어(5,108)</option>
                                                                    <option value="3000028064" title="아이코다">아이코다(4,884)</option>
                                                                    <option value="3000044151" title="셀러허브라이프샵">셀러허브라이프샵(4,341)</option>
                                                                    <option value="3000044063" title="유니슈트">유니슈트(3,156)</option>
                                                                    <option value="3000047116" title="디작소">디작소(3,026)</option>
                                                                    <option value="2000003897" title="LG생활건강">LG생활건강(2,937)</option>
                                                                    <option value="3000039238" title="스펙플러스">스펙플러스(2,913)</option>
                                                                    <option value="2000018920" title="오뚜기">오뚜기(2,797)</option>
                                                                    <option value="2000019846" title="유한양행">유한양행(2,735)</option>
                                                                    <option value="3000022679" title="제이토너">제이토너(2,568)</option>
                                                                    <option value="3000061011" title="Qubridge">Qubridge(2,546)</option>
                                                                    <option value="3000026994" title="친절한 도그씨">친절한 도그씨(2,418)</option>
                                                                    <option value="2000002827" title="H&amp;M">H&amp;M(2,332)</option>
                                                                    <option value="3000038069" title="옷자락">옷자락(2,326)</option>
                                                                    <option value="3000022677" title="필터테크">필터테크(2,261)</option>
                                                                    <option value="3000033192" title="주식회사 아토세이프">주식회사 아토세이프(2,253)</option>
                                                                    <option value="3000039419" title="제이투와이">제이투와이(2,246)</option>
                                                                    <option value="2011000234" title="교보문고">교보문고(2,235)</option>
                                                                    <option value="2000017721" title="아토세이프">아토세이프(2,159)</option>
                                                                    <option value="2000019111" title="오피스디포">오피스디포(2,119)</option>
                                                                    <option value="3000004838" title="오피스넥스">오피스넥스(2,054)</option>
                                                                    <option value="3000031291" title="제이코튼">제이코튼(2,032)</option>
                                                                    <option value="3000043839" title="셀러허브_잡화">셀러허브_잡화(1,995)</option>
                                                                    <option value="3000045861" title="헬로오피스">헬로오피스(1,917)</option>
                                                                    <option value="3000035574" title="이룸팩">이룸팩(1,846)</option>
                                                                    <option value="2011000640" title="사조대림">사조대림(1,814)</option>
                                                                    <option value="3000047043" title="위제이">위제이(1,804)</option>
                                                                    <option value="3000049944" title="필터탑스">필터탑스(1,782)</option>
                                                                    <option value="3000047841" title="ATY 펫">ATY 펫(1,655)</option>
                                                                    <option value="2011014191" title="GILRAJAVY">GILRAJAVY(1,526)</option>
                                                                    <option value="3000049366" title="이노플리아">이노플리아(1,500)</option>
                                                                    <option value="3000032597" title="스킨럽">스킨럽(1,476)</option>
                                                                    <option value="2000000985" title="발망(Balmain)">발망(Balmain)(1,445)</option>
                                                                    <option value="2000000101" title="3M">3M(1,420)</option>
                                                                    <option value="3000032794" title="멍멍몰">멍멍몰(1,406)</option>
                                                                    <option value="3000038952" title="CORREXIKO(해외직구)">CORREXIKO(해외직구)(1,366)</option>
                                                                    <option value="2000006824" title="TRY">TRY(1,357)</option>
                                                                    <option value="2000000970" title="BYC">BYC(1,324)</option>
                                                                    <option value="3000056589" title="다잇템">다잇템(1,321)</option>
                                                                    <option value="2000017953" title="애경">애경(1,299)</option>
                                                                    <option value="3000015986" title="파인피아">파인피아(1,292)</option>
                                                                    <option value="3000042910" title="짱펫_셀러허브">짱펫_셀러허브(1,274)</option>
                                                                    <option value="3000027931" title="스코코">스코코(1,241)</option>
                                                                    <option value="3000014891" title="밀크북">밀크북(1,220)</option>
                                                                    <option value="3000049258" title="스티브 매든">스티브 매든(1,207)</option>
                                                                    <option value="3000000954" title="솔로몬샵">솔로몬샵(1,149)</option>
                                                                    <option value="3000056695" title="너만아는과자점">너만아는과자점(1,124)</option>
                                                                    <option value="1010300099" title="크린랩">크린랩(1,090)</option>
                                                                    <option value="2000009226" title="가쯔">가쯔(1,078)</option>
                                                                    <option value="3000035431" title="웅진북센">웅진북센(1,060)</option>
                                                                    <option value="2000020840" title="제임스딘">제임스딘(1,039)</option>
                                                                    <option value="2011010091" title="송월타월">송월타월(1,038)</option>
                                                                    <option value="3000046446" title="필터렉스">필터렉스(1,034)</option>
                                                                    <option value="3000047532" title="네이쳐굿">네이쳐굿(1,014)</option>
                                                                    <option value="2000001321" title="CJ제일제당">CJ제일제당(1,000)</option>
                                                                    <option value="3000057613" title="더이지">더이지(999)</option>
                                                                    <option value="3000028796" title="ONDA">ONDA(994)</option>
                                                                    <option value="3000057591" title="담다쇼핑">담다쇼핑(946)</option>
                                                                    <option value="2011011145" title="올리오">올리오(923)</option>
                                                                    <option value="3000046521" title="제이디지탈">제이디지탈(917)</option>
                                                                    <option value="3000027586" title="파티공구">파티공구(907)</option>
                                                                    <option value="3000049921" title="유아이홈">유아이홈(905)</option>
                                                                    <option value="3000020781" title="토종마을">토종마을(897)</option>
                                                                    <option value="3000012807" title="원포장">원포장(893)</option>
                                                                    <option value="3000035464" title="가우런">가우런(893)</option>
                                                                    <option value="2000002082" title="ELLE HOMME (엘르옴므)">ELLE HOMME (엘르옴...(884)</option>
                                                                    <option value="2010008224" title="OCEAN SKY">OCEAN SKY(882)</option>
                                                                    <option value="3000040285" title="레노마 이너웨어">레노마 이너웨어(855)</option>
                                                                    <option value="2011008882" title="ViPET">ViPET(843)</option>
                                                                    <option value="3000035883" title="에이미러브즈펫">에이미러브즈펫(828)</option>
                                                                    <option value="2000024843" title="헨켈">헨켈(822)</option>
                                                                    <option value="3000057252" title="컴튜브">컴튜브(802)</option>
                                                                    <option value="3000029943" title="딩동펫">딩동펫(756)</option>
                                                                    <option value="2000017902" title="알파">알파(747)</option>
                                                                    <option value="3000024342" title="캐롯츠">캐롯츠(721)</option>
                                                                    <option value="3000006941" title="센텔리안24">센텔리안24(710)</option>
                                                                    <option value="2000002961" title="HP">HP(709)</option>
                                                                    <option value="3000004088" title="MCN">MCN(694)</option>
                                                                    <option value="3000047365" title="엠지컴퓨터">엠지컴퓨터(691)</option>
                                                                    <option value="3000045934" title="LG생활건강">LG생활건강(686)</option>
                                                                    <option value="3000007722" title="부케가르니">부케가르니(683)</option>
                                                                    <option value="3000033684" title="패킹콩">패킹콩(675)</option>
                                                                    <option value="3000033472" title="레드퍼피">레드퍼피(662)</option>
                                                                    <option value="2010028371" title="sinjimoru">sinjimoru(649)</option>
                                                                    <option value="3000022458" title="꼴레트멍멍">꼴레트멍멍(634)</option>
                                                                </select>
                                                            </span>
                                                        </span>
                                                        <ul className="ds_schlist"></ul>
                                                    </div>
                                                </div>
                                                <div className="detail_sch" data-areaid="cls">
                                                        <span className="tit">상품유형</span>
                                                        <div className="ds_cont">
                                                            <span className="des_select">
                                                                <span className="cc_ellip_in" id="cls_select">전체</span>
                                                                <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                                <span className="hide_select">
                                                                    <label for="cls">상품유형 선택</label>
                                                                    <select id="cls" title="옵션" multiple="multiple" data-defaultvalue="전체">
                                                                        <option value="department" title="백화점상품">백화점상품</option>
                                                                        <option value="usedgood" title="중고상품">중고상품</option>
                                                                    </select>
                                                                </span>
                                                            </span>
                                                            <ul className="ds_schlist"></ul>
                                                        </div>
                                                </div>
                                                <div className="detail_sch" data-areaid="shpp">
                                                    <span className="tit">배송유형</span>
                                                    <div className="ds_cont">
                                                        <span className="des_select">
                                                            <span className="cc_ellip_in selected" id="shpp_select">전체</span>
                                                            <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                            <span className="hide_select">
                                                                <label for="shpp">배송유형 선택</label>
                                                                <select id="shpp" title="옵션">
                                                                    <option value="all">전체</option>
                                                                    <option value="picku" title="매장픽업" className="clickable" data-info="picku">매장픽업</option>
                                                                    <option value="qshpp" title="퀵배송" className="clickable" data-info="qshpp">퀵배송</option>
                                                                    <option value="con" title="모바일쿠폰" className="clickable" data-info="con">모바일쿠폰</option>
                                                                    <option value="direct" title="해외직구" className="clickable" data-info="direct">해외직구</option>
                                                                </select>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="detail_sch">
                                                    <span className="tit">혜택</span>
                                                    <div className="ds_cont">
                                                        <span className="des_select">
                                                            <span className="cc_ellip_in" id="filter_select">전체</span>
                                                            <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                            <span className="hide_select">
                                                                <label for="filter">혜택 선택</label>
                                                                <select id="filter" title="옵션" multiple="multiple" data-defaultvalue="전체">
                                                                    <option value="obanjang|spprice" title="특가상품">특가상품</option>
                                                                    <option value="dscnt" title="쿠폰/에누리">쿠폰/에누리</option>
                                                                    <option value="dsale" title="백화점세일">백화점세일</option>
                                                                    <option value="free" title="무료배송">무료배송</option>
                                                                </select>
                                                            </span>
                                                        </span>
                                                        <ul className="ds_schlist"></ul>
                                                    </div>
                                                </div>
                                                <div className="detail_sch">
                                                    <span className="tit">백화점상품</span>
                                                    <div className="ds_cont">
                                                        <span className="des_select">
                                                            <span className="cc_ellip_in selected" id="salestrNo_select">전체</span>
                                                            <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                            <span className="hide_select">
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
                                                        <ul className="ds_schlist"></ul>
                                                    </div>
                                                </div>
                                                <div className="detail_sch">
                                                    <span className="tit">가격</span>
                                                    <div className="ds_cont">
                                                        <span className="des_select">
                                                            <span className="cc_ellip_in selected" id="price_select">전체</span>
                                                            <span className="sp_com_v2 sel_arrow">&nbsp;</span>
                                                            <span className="hide_select">
                                                                <label for="lf_like">가격 선택</label>
                                                                <select id="price" title="옵션">
                                                                    <option value="all">전체</option>
                                                                    

                                                                        dvdPrc :: 10000
                                                                        dvdMinPrcLong :: 0.0
                                                                        dvdMaxPrcLong :: 1.0
                                                                        dvdMinUnit :: 0
                                                                        dvdMinUnit1 :: 00000
                                                                        dvdMaxUnit :: 10000
                                                                        dvdMaxUnit1 :: 10000
                                                                        dvdMinPrc :: 0
                                                                        dvdMaxPrc :: 1

                                                                    <option value="0-10000" title="0">~ 1만원</option>
                                                                                

                                                                        dvdPrc :: 10000
                                                                        dvdMinPrcLong :: 1.0
                                                                        dvdMaxPrcLong :: 3.0
                                                                        dvdMinUnit :: 10000
                                                                        dvdMinUnit1 :: 10000
                                                                        dvdMaxUnit :: 30000
                                                                        dvdMaxUnit1 :: 30000
                                                                        dvdMinPrc :: 1
                                                                        dvdMaxPrc :: 3

                                                                    <option value="0-30000" title="1">~ 3만원</option>
                                                                                

                                                                        dvdPrc :: 10000
                                                                        dvdMinPrcLong :: 3.0
                                                                        dvdMaxPrcLong :: 15.0
                                                                        dvdMinUnit :: 30000
                                                                        dvdMinUnit1 :: 30000
                                                                        dvdMaxUnit :: 150000
                                                                        dvdMaxUnit1 :: 150000
                                                                        dvdMinPrc :: 3
                                                                        dvdMaxPrc :: 15

                                                                    <option value="30000-150000" title="2">3만원 ~ 15만원</option>
                                                                                

                                                                        dvdPrc :: 10000
                                                                        dvdMinPrcLong :: 15.0
                                                                        dvdMaxPrcLong :: 4839.0
                                                                        dvdMinUnit :: 150000
                                                                        dvdMinUnit1 :: 150000
                                                                        dvdMaxUnit :: 4
                                                                        dvdMaxUnit1 :: 48390000
                                                                        dvdMinPrc :: 15
                                                                        dvdMaxPrc :: 4,839

                                                                    <option value="150000-4" title="3">15만원 ~ 4,839만원</option>
                                                                </select>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="bnbox">
                                                <li><a href="#" className="bn_gray2">선택초기화</a></li>
                                                <li><a href="#" className="bn_pnk2">선택적용</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FilterCategory;