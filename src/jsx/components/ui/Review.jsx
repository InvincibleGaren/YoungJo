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