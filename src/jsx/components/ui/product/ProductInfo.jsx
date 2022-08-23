import React from 'react'
import SmileClubBanner from '../../SmileClubBanner'
import ProductBasicInfo from './ProductBasicInfo'

function ProductInfo({productData}) {
  return (
    <div className="mndtl_sec mndtl_prd_wrap" data-react-tarea-cd="00006_000000005">
        <ProductBasicInfo productData = {productData} />
        <SmileClubBanner />

        {/* <!-- 리뷰/쓱톡 --> */}
        <div className="mndtl_refer">
            <div className="mndtl_grade">
                <span className="mndtl_star12">
                    <span className="mndtl_star12_per"></span>
                    <span className="blind">별점 5점 중 <em>4.3</em>점</span>
                </span>
                <a href="#" className="mndtl_grade_total modal-iframe-open clickable" data-react-tarea-dtl-cd="t00060" data-title="고객리뷰" data-tab-name="_detailreview_tab" data-layer-target="/mitem/reviewAll.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005&amp;rightBadgeCd=" target="">543건 리뷰<span className="blind">더보기</span></a>
                {/* <!-- 포토&동영상 전체보기 --> */}
                <a href="#" className="mndtl_mediall_more modal-iframe-open" data-title="포토&amp;동영상 전체(58)" data-tab-name="_detailimgreview_tab" data-layer-target="/mitem/imgReviewAll.ssg?itemId=1000040597007&amp;siteNo=6004&amp;salestrNo=6005" target="">
                    <div className="mndtl_mediall_summary_list">
                        <div className="mndtl_figure_thmb">
                            <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220801111229_1177967825_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=4cc3c257036796b93ed6bc283842c17bd5e01df5" />
                        </div>
                        <div className="mndtl_figure_thmb">
                            <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202207/20220729132326_1177703594_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=0bb4f441bb15d05ffa82306a7372fff1af9821d1" />
                        </div>
                        <div className="mndtl_figure_thmb">
                            <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202207/20220723114235_1177285261_0_1.jpg&amp;w=50&amp;h=50&amp;autoOrient=true&amp;t=1b09a1b8e6f1bbec6d8be304b52cebf4f708bd31" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default ProductInfo