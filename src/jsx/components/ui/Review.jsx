import React from 'react'

function Review() {
  return (
    <>
    <div className="mndtl_sec_subject">
        <h3 className="mndtl_sec_tit">고객리뷰</h3>
    </div>

    <div className="mndtl_summary_noti">
	    <p className="mndtl_summary_tx">등록된 리뷰가 없습니다.</p>
    </div>

    <div className="mndtl_cmt_rate">
        <span className="mndtl_star18">
            {/* <span className="mndtl_star18_per" style="width: 86.0%"></span> */}
            <span className="blind">별점 5점 중 <em>4.3</em>점</span>
        </span>
        <span className="mndtl_rate_score" aria-hidden="true">4.3/5</span>

        <div className="mndtl_rate_count">
            <div className="mndtl_rate_total">
                <span className="mndtl_rate_totalnum">543</span>건 리뷰
            </div>
        </div>
    </div>

    <div class="mndtl_cmt_figure v3 type8">
	    <div class="mndtl_figure_tit">
            <span class="mndtl_tit_tx">포토&amp;동영상 리뷰</span>
            <a href="#" class="mndtl_review_more modal-iframe-open" data-title="포토&amp;동영상 전체(9)" data-tab-name="_detailimgreview_tab" data-layer-target="/mitem/imgReviewAll.ssg?repItemId=&amp;itemId=1000030176507&amp;siteNo=6004&amp;salestrNo=6005&amp;rightBadgeCd=" target="">더보기(<span>9</span>)<i class="mndtl_ic_arr"></i></a>
        </div>
        <ul class="mndtl_figure_lst">
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="0" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 1,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203054_1172481154_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=fe63cdc73afecf3374fe674cda04152bc8389251" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203054_1172481154_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=fe63cdc73afecf3374fe674cda04152bc8389251" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="1" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 2,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203026_1172481078_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=3f5fb8093cc4d2d182234c7c40883034af69b64b" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203026_1172481078_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=3f5fb8093cc4d2d182234c7c40883034af69b64b" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="2" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 3,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202102/20210218163835_1124260204_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=56ae64643ff05812de173ee312cae36206ab748b" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202102/20210218163835_1124260204_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=56ae64643ff05812de173ee312cae36206ab748b" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="3" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 4,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220806171643_1178518022_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=595ce36ade586205ccf541a6734b8a921ba908c0" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220806171643_1178518022_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=595ce36ade586205ccf541a6734b8a921ba908c0" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="4" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 5,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220806171619_1178517922_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=cbf0b82f1752cd629197d40bc442d361b5f3df55" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220806171619_1178517922_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=cbf0b82f1752cd629197d40bc442d361b5f3df55" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="5" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 6,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202003/20200331184139_1089582113_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=8f03d6e630df5b79c2e8c1deb00728189d065f05" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202003/20200331184139_1089582113_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=8f03d6e630df5b79c2e8c1deb00728189d065f05" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="6" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 7,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202003/20200331184110_1089582120_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=bc7f5a6d9edfd1bb71261232e1a4b243579da6f8" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202003/20200331184110_1089582120_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=bc7f5a6d9edfd1bb71261232e1a4b243579da6f8" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
            <li>
                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="7" onclick="itemReview.getImgVideoReviewModalViewNew('1000030176507','', 8,'1')" target="">
                    <div class="mndtl_figure_thmb">
                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202005/20200513203221_1094318921_1.jpeg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=7f7f5ceaee069486ba7cdde74d94f439fc25dc13" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202005/20200513203221_1094318921_1.jpeg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=7f7f5ceaee069486ba7cdde74d94f439fc25dc13" alt="" data-ll-status="loaded" />
                    </div>
                </a>
            </li>
        </ul>
    </div>

    

    <div className="mndtl_cmt_summary v2">
        <div className="mndtl_chart_tit">
            <span className="mndtl_tit_tx">전체 리뷰</span>
            <a href="javascript:void(0);" className="mndtl_chart_more modal-iframe-open" data-react-tarea-dtl-cd="t00041" data-title="고객리뷰" data-tab-name="_detailreview_tab" data-layer-target="/mitem/reviewAll.ssg?repItemId=&amp;itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;rightBadgeCd=" target="_parent">
                더보기<span className="count">(543)</span><i className="mndtl_ic_arr"></i>
            </a>
        </div>

        <ul className="mndtl_chart_lst">
            <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                        <div className="mndtl_msg_bx">
                            <span className="mndtl_prdopt_name"></span>
                        </div>
                    </div>
                    <span className="mndtl_star12">
                        {/* <span className="mndtl_star12_per" style="width: 100%"></span> */}
                        <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">일반</span>
                    <div className="mndtl_user_info">
                        <span className="mndtl_user_tx">2022.08.14</span>
                        <span className="mndtl_user_tx">lit*******</span>
                    </div>
                    {/* <div className="mndtl_cmtsum_figure">
                        <ul className="mndtl_figure_lst"></ul>
                    </div> */}
                    {/* <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1179144919', 1)" target=""><span className="blind">
                        전체리뷰보기</span>
                    </a> */}
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1179144919', 1)" target="">
                        <p className="mndtl_cmtsum_desc">
                            가격도 적당하고 맛도 좋아요
                        </p>
                    </a>
                </div>
                {/* <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1179144919', 1)" target=""><span className="blind">전체리뷰보기</span></a> */}
            </li>
            <li class="mndtl_chart_item">
                <div class="mndtl_cmtsum">
                    <div class="mndtl_msg_unit">
                        <div class="mndtl_msg_bx">
                            <span class="mndtl_prdopt_name"></span>
                        </div>
                    </div>
                    <span class="mndtl_star12">
                        <span class="mndtl_star12_per"></span>
                        <span class="blind">별점 5점 중 <em>1</em>점</span>
                    </span>
                    <span class="mndtl_review_type">
                        일반</span>
                    <div class="mndtl_user_info">
                        <span class="mndtl_user_tx">2022.07.31</span>
                        <span class="mndtl_user_tx">loo*******</span>
                    </div>
                    <div class="mndtl_cmtsum_figure">
                        <ul class="mndtl_figure_lst">
                        </ul>
                    </div>
                    <a href="#" class="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1177827809', 1)" target=""><span class="blind">전체리뷰보기</span></a>
                    <a href="#" class="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1177827809', 1)" target="">
                        <p class="mndtl_cmtsum_desc">
                            아무리봐도 가품같아요 나이키에서 이런재질의 티를 사본적이없거든요 가품시 200프로 보상해준다고 써있으니 매장직접가서 비교해보려구요
                        </p>
                    </a>
                </div>
                <a href="#" class="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1172481154', 1)" target=""><span class="blind">전체리뷰보기</span></a>
			</li>        
            <li class="mndtl_chart_item">
                <div class="mndtl_cmtsum">
                    <div class="mndtl_msg_unit">
                        <div class="mndtl_msg_bx">
                            <span class="mndtl_prdopt_name"></span>
                        </div>
                    </div>
                    <span class="mndtl_star12">
                        <span class="mndtl_star12_per"></span>
                        <span class="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span class="mndtl_review_type">일반</span>
                    <div class="mndtl_user_info">
                        <span class="mndtl_user_tx">2022.05.27</span>
                        <span class="mndtl_user_tx">shh*******</span>
                    </div>
                    <div class="mndtl_cmtsum_figure">
                        <ul class="mndtl_figure_lst">
                            <li>
                                <a href="#" class="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1172481154', 1)" target="">
                                    <div class="mndtl_figure_thmb">
                                        <img class="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203054_1172481154_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=fe63cdc73afecf3374fe674cda04152bc8389251" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203054_1172481154_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=fe63cdc73afecf3374fe674cda04152bc8389251" alt="" data-ll-status="loaded" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1172481154', 1)" target=""><span class="blind">전체리뷰보기</span></a>
                    <a href="#" class="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1172481154', 1)" target="">
                        <p class="mndtl_cmtsum_desc">
                            여름에 입기 좋아요
                            건조기 원래 기본 3단, 두꺼운건 4단
                            이건 2단으로 돌리니 줄어들지도 않고 좋아요
                            원단이 얇아 1단돌려도 괜찮을것 같아요
                        </p>
                    </a>
                </div>
                {/* <a href="#" class="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000030176507', '6004', '6005', '1172481154', 1)" target=""><span class="blind">전체리뷰보기</span></a> */}
			</li>
            {/* <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                    <div className="mndtl_msg_bx">
                        <span className="mndtl_prdopt_name"></span>
                    </div>
                    </div>
                    <span className="mndtl_star12">
                    <span className="mndtl_star12_per" style="width: 100%"></span>
                    <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">일반</span>
                    <div className="mndtl_user_info">
                    <span className="mndtl_user_tx">2022.08.11</span>
                    <span className="mndtl_user_tx">jun*******</span>
                    </div>
                    <div className="mndtl_cmtsum_figure">
                    <ul className="mndtl_figure_lst">
                    </ul>
                    </div>
                    <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178916004', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178916004', 1)" target="">
                    <p className="mndtl_cmtsum_desc">
                        달고 맛있어요~ 갑작스런 폭우에 배송에 문제 생길까 걱정했는데 상하지 않았고 좋은 물건으로 잘 받았습니다.
                    </p>
                    </a>
                </div>
                <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178916004', 1)" target=""><span className="blind">전체리뷰보기</span></a>
            </li>
            <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                    <div className="mndtl_msg_bx">
                        <span className="mndtl_prdopt_name"></span>
                    </div>
                    </div>
                    <span className="mndtl_star12">
                    <span className="mndtl_star12_per" style="width: 100%"></span>
                    <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">
                    일반</span>
                    <div className="mndtl_user_info">
                    <span className="mndtl_user_tx">2022.08.10</span>
                    <span className="mndtl_user_tx">ant*******</span>
                    </div>
                    <div className="mndtl_cmtsum_figure">
                    <ul className="mndtl_figure_lst">
                        </ul>
                    </div>
                    <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178807868', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178807868', 1)" target="">
                            <p className="mndtl_cmtsum_desc">
                                맛있어요 좋아요 훌륭한</p>
                        </a>
                    </div>
                <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178807868', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                </li>
            <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                    <div className="mndtl_msg_bx">
                        <span className="mndtl_prdopt_name"></span>
                    </div>
                    </div>
                    <span className="mndtl_star12">
                    <span className="mndtl_star12_per" style="width: 100%"></span>
                    <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">
                    일반</span>
                    <div className="mndtl_user_info">
                    <span className="mndtl_user_tx">2022.08.08</span>
                    <span className="mndtl_user_tx">you*******</span>
                    </div>
                    <div className="mndtl_cmtsum_figure">
                    <ul className="mndtl_figure_lst">
                        </ul>
                    </div>
                    <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178695432', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178695432', 1)" target="">
                            <p className="mndtl_cmtsum_desc">
                                햇고구마라 덜 말라서 그런지 별로 달지는 않아요.</p>
                        </a>
                    </div>
                <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178695432', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                </li>
            <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                    <div className="mndtl_msg_bx">
                        <span className="mndtl_prdopt_name"></span>
                    </div>
                    </div>
                    <span className="mndtl_star12">
                    <span className="mndtl_star12_per" style="width: 100%"></span>
                    <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">
                    일반</span>
                    <div className="mndtl_user_info">
                    <span className="mndtl_user_tx">2022.08.08</span>
                    <span className="mndtl_user_tx">eye*******</span>
                    </div>
                    <div className="mndtl_cmtsum_figure">
                    <ul className="mndtl_figure_lst">
                        </ul>
                    </div>
                    <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178656896', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178656896', 1)" target="">
                            <p className="mndtl_cmtsum_desc">
                                상품도 배송도 좋습니다~~</p>
                        </a>
                    </div>
                <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" onclick="itemReview.getReviewModalView('1000040597007', '6004', '6005', '1178656896', 1)" target=""><span className="blind">전체리뷰보기</span></a>
                </li> */}
        </ul>
    </div>
    </>
  );
}

export default Review;