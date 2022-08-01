import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Slider() {
    return ( 
        <div class="swiper-container swiper-container-horizontal">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" data-swiper-slide-index="0">
                    <a href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001384" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|8/1 단 하루 피코크데이">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072912214298503528848352_841.jpg" alt="단 하루 피코크데이" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="1">                    
                    <a href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|8/1~7 메타버쓱 오픈런 사전 행사">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072912150788606281658628_363.jpg" alt="메타버쓱 오픈런 사전 행사" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="2">
                    <a href="/planshop/detail.ssg?dispCmptId=6000125592" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/28~8/3 전단광고">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072615454799207828382782_614.jpg" alt="전단광고" />
                    </a>              
                </li>
                <li class="swiper-slide" data-swiper-slide-index="3">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="4">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="5">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="6">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="7">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="8">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="9">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="10">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="11">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="12">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="13">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="14">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="15">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="16">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="17">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="18">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="19">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="20">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="21">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="22">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="23">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
                <li class="swiper-slide" data-swiper-slide-index="24">                   
                    <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                        <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                    </a>
                </li>
            </ul>
            <div>
                <div class="swiper-pagination swiper-pagination-custom">
                    <span class="blind">현재 배너</span><span class="swiper-pagination-current">18</span>
                    <span class="swiper-pagination-separator"> / </span>
                    <span class="blind">전체 배너</span>
                    <span class="swiper-pagination-total">25</span>
                </div>
                <div class="swiper_ctrls_util">
                    <div class="swiper_autoplay">
                        <button type="button" class="btn_autoplay pause clickable" data-react-tarea="홈|메인롤링배너|정지/재생_클릭|">
                            <span class="label_pause"><span class="blind">배너 목록 자동 재생 정지</span></span>
                            <span class="label_play"><span class="blind">배너 목록 자동 재생 시작</span></span>
                        </button>
                    </div>
                    <div class="swiper_moreview">
                        <button type="button" class="btn_moreview clickable" data-react-tarea="홈|메인롤링배너|더보기_클릭"><span class="blind">배너 전체보기</span></button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Slider;