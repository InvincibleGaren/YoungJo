import React from 'react'
import ProductPrice from './ProductPrice'

function ProductInfo({productData}) {
  return (
    <div className="mndtl_sec mndtl_prd_wrap" data-react-tarea-cd="00006_000000005">
        <div className="mndtl_mall">
            <div className="mndtl_mall_badge">
                <span className="cm_mall_text">
                    <i className="sm">{productData.salesSite}</i>
                </span>
            </div>
            <button type="button" className="mndtl_btn_share modal-layer-open">
                <i className="mndtl_ic mndtl_ic_share clickable"></i>
                <span className="blind">공유</span>
            </button>
        </div>
        
        <div className="mndtl_prd_info">
            <h2 className="mndtl_prd_title">
                <a href="#" className="mndtl_prdtit_brand clickable"target="_parent">{productData.brand}</a>
                <span className="mndtl_prdtit_name">{productData.title}</span>
            </h2>

            <ProductPrice productData = {productData} />
        </div>
        
        {/* <!-- 스마일클럽 배너 --> */}
        <div className="mndtl_prd_info">
            <div className="mndtl_smile_lst">
                <div className="mndtl_smile_type">
                    <a href="#" className="clickable" target="_parent">
                        <img className="ssg_lazy loaded" src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750" data-src="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750" data-srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x" alt="스마일 클럽 무료 체험" data-ll-status="loaded" srcset="https://simg.ssgcdn.com/trans.ssg?src=/ui/m_ssg/img/product/mndtl_smile_type_nologin_nomember2.png&amp;w=750 3x" />
                    </a>
                    <p className="blind">스마일 클럽 무료 체험</p>
                </div>
            </div>
        </div>

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