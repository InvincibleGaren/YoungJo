import React from 'react'

function ReviewTotal() {
  return (
    <div className="mndtl_cmt_summary v2">
        <div className="mndtl_chart_tit">
            <span className="mndtl_tit_tx">전체 리뷰</span>
            <a href="#" className="mndtl_chart_more modal-iframe-open" data-react-tarea-dtl-cd="t00041" data-title="고객리뷰" data-tab-name="_detailreview_tab" data-layer-target="/mitem/reviewAll.ssg?repItemId=&amp;itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;rightBadgeCd=" target="_parent">
                더보기<span className="count">&#40;543&#41;</span><i className="mndtl_ic_arr"></i>
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
                        <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">일반</span>
                    <div className="mndtl_user_info">
                        <span className="mndtl_user_tx">2022.08.14</span>
                        <span className="mndtl_user_tx">abo*******</span>
                    </div>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" target="">
                        <p className="mndtl_cmtsum_desc">
                            아무리봐도 가품같아요 나이키에서 이런재질의 티를 사본적이없거든요 가품시 200프로 보상해준다고 써있으니 매장직접가서 비교해보려구요
                        </p>
                    </a>
                </div>
            </li>
            <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                        <div className="mndtl_msg_bx">
                            <span className="mndtl_prdopt_name"></span>
                        </div>
                    </div>
                    <span className="mndtl_star12">
                        <span className="mndtl_star12_per"></span>
                        <span className="blind">별점 5점 중 <em>1</em>점</span>
                    </span>
                    <span className="mndtl_review_type">
                        일반</span>
                    <div className="mndtl_user_info">
                        <span className="mndtl_user_tx">2022.07.31</span>
                        <span className="mndtl_user_tx">yuu*******</span>
                    </div>
                    <div className="mndtl_cmtsum_figure">
                        <ul className="mndtl_figure_lst">
                        </ul>
                    </div>
                    <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" target=""><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" target="">
                        <p className="mndtl_cmtsum_desc">
                            가격도 적당하고 맛도 좋아요
                        </p>
                    </a>
                </div>
                <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3" target=""><span className="blind">전체리뷰보기</span></a>
            </li>        
            <li className="mndtl_chart_item">
                <div className="mndtl_cmtsum">
                    <div className="mndtl_msg_unit">
                        <div className="mndtl_msg_bx">
                            <span className="mndtl_prdopt_name"></span>
                        </div>
                    </div>
                    <span className="mndtl_star12">
                        <span className="mndtl_star12_per"></span>
                        <span className="blind">별점 5점 중 <em>5</em>점</span>
                    </span>
                    <span className="mndtl_review_type">일반</span>
                    <div className="mndtl_user_info">
                        <span className="mndtl_user_tx">2022.05.27</span>
                        <span className="mndtl_user_tx">odk*******</span>
                    </div>
                    <div className="mndtl_cmtsum_figure">
                        <ul className="mndtl_figure_lst">
                            <li>
                                <a href="#" className="modal_btn_photoreview modal-fix-open" data-layer-target=".modal_photo_review3" data-figure-index="" target="">
                                    <div className="mndtl_figure_thmb">
                                        <img className="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203054_1172481154_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=fe63cdc73afecf3374fe674cda04152bc8389251" data-src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202205/20220527203054_1172481154_0_1.jpg&amp;w=120&amp;h=120&amp;autoOrient=true&amp;t=fe63cdc73afecf3374fe674cda04152bc8389251" alt="" data-ll-status="loaded" />
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="modal_all_review modal-fix-open" data-layer-target=".modal_photo_review3"  target=""><span className="blind">전체리뷰보기</span></a>
                    <a href="#" className="modal-fix-open" data-layer-target=".modal_photo_review3" target="">
                        <p className="mndtl_cmtsum_desc">
                            여름에 입기 좋아요
                            건조기 원래 기본 3단, 두꺼운건 4단
                            이건 2단으로 돌리니 줄어들지도 않고 좋아요
                            원단이 얇아 1단돌려도 괜찮을것 같아요
                        </p>
                    </a>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ReviewTotal