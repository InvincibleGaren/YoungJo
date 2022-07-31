import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Slider() {
    return ( 
        <div>
            <div class="swiper-container swiper-container-horizontal">
                <ul class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-25823px, 0px, 0px);"><li class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="24" style="width: 1519px;">
                    <li class="swiper-slide" data-swiper-slide-index="0" style="width: 1519px;">
                        <a href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001384" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|8/1 단 하루 피코크데이">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072912214298503528848352_841.jpg" alt="단 하루 피코크데이" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="1" style="width: 1519px;">                    
                        <a href="https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000001250" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|8/1~7 메타버쓱 오픈런 사전 행사">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072912150788606281658628_363.jpg" alt="메타버쓱 오픈런 사전 행사" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="2" style="width: 1519px;">
                        <a href="/planshop/detail.ssg?dispCmptId=6000125592" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/28~8/3 전단광고">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072615454799207828382782_614.jpg" alt="전단광고" />
                        </a>              
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="3" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="4" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="5" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="6" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="7" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="8" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="9" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="10" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="11" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="12" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="13" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="14" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="15" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="16" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="17" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="18" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="19" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="20" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="21" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="22" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="23" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                    <li class="swiper-slide" data-swiper-slide-index="24" style="width: 1519px;">                   
                        <a href="/plan/planShop.ssg?dispCmptId=6000441058" class="cmherovideo_bnlnk clickable" data-react-tarea-dtl-cd="t00001" data-react-tarea="홈|메인롤링배너|배너_클릭|7/25~30 가격의끝">
                            <img class="swiper-lazy swiper-lazy-loaded" src="//sui.ssgcdn.com/cmpt/banner/202207/2022072810161838044094646509_583.jpg" alt="가격의끝" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Slider;