const img01 = "https://sitem.ssgcdn.com/86/41/09/item/1000333094186_i1_500.jpg"
const img02 = "https://sitem.ssgcdn.com/39/56/17/item/1000355175639_i1_500.jpg"
const img03 = "https://sitem.ssgcdn.com/62/87/43/item/1000062438762_i1_500.jpg"
const starimg = "data:image/svg+xml, %3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' fill='rgb%280%2C0%2C0%29'%3E%3Cpath d='M8 12.86L12.944 16l-1.312-5.92L16 6.097l-5.752-.514L8 0 5.752 5.583 0 6.097l4.368 3.983L3.056 16z' fill-rule='evenodd'/%3E%3C/svg%3E"

const DSBIData = [
    
    {
        id : 1,
        imgUrl : img01,
        brandName : "샤넬",
        name : "[주문폭증으로 순차적 출고 예정][2021년 햅쌀]쌀가게 수향미 (특등급) 10KG" ,
        //이름 길면 ...으로 표시되야함
        salePrice : 31527 ,
        //정가 아니고 할인 먹힌 판매가
        salePercent : 43, 
        //숫자? 문자열?
        star : starimg,
        asterion : 4.7 ,
        //별로 매겨지는 점수
        numOfReview : 420 
        //리뷰 수

    },
    {
        id : 2,
        imgUrl : img02,
        brandName : "밀레(MILLET)",
        name : "밀레 (22년 역시즌) 남성 헤비 페딩 구스다운 모음 2종 택1 슈흐H구스다운/콜마르H구스다운 MVQWD441/MVQWD443(추리가 479,000원)" ,
        salePrice : 59092 ,
        //정가 아니고 할인 먹힌 판매가
        salePercent : 25, 
        // (%) 숫자? 문자열?
        star : starimg,
        asterion : 4.6 ,
        //별로 매겨지는 점수
        numOfReview : 46 
        //리뷰 수(건)

    },
    {
        id : 3,
        imgUrl : img03,
        brandName : "네파(NEPA)",
        name : "남성 3칼라 네파 C-TR 카고 아이스 하프 팬츠 7H31762 시즌마감 최종가" ,
        salePrice : 21250 ,
        //정가 아니고 할인 먹힌 판매가
        salePercent : 15, 
        //할인율, 숫자? 문자열?, 표시 되있는 것도 있고 없는 것도 있음.
        star : starimg,
        asterion : 5.0 ,
        //별로 매겨지는 점수
        numOfReview : 2 
        //리뷰 수
    }
]

export default DSBIData;