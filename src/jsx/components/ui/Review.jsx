import React from 'react'
import ReviewPhotoVideo from './ReviewPhotoVideo';
import ReviewTotal from './ReviewTotal';

function Review() {
  return (
    <>
        <div className="mndtl_sec_subject">
            <h3 className="mndtl_sec_tit">고객리뷰</h3>
        </div>

        {/* <div className="mndtl_summary_noti">
            <p className="mndtl_summary_tx">등록된 리뷰가 없습니다.</p>
        </div> */}

        <div className="mndtl_cmt_rate">
            <span className="mndtl_star18">
                <span className="blind">별점 5점 중 <em>4.3</em>점</span>
            </span>
            <span className="mndtl_rate_score" aria-hidden="true">4.3/5</span>

            <div className="mndtl_rate_count">
                <div className="mndtl_rate_total">
                    <span className="mndtl_rate_totalnum">543</span>건 리뷰
                </div>
            </div>
        </div>
        
        <ReviewPhotoVideo />
        <ReviewTotal />
    </>
  );
}

export default Review;