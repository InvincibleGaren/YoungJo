const ssgLogo = "https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png"
const samsungLogo = "https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi75.png"

const cardPromotionDatas = [
    {
        id : 1,
        rate : 3,
        price : "isView",
        percent : "isNonView",
        logo : ssgLogo,
        card : "SSG.COM 카드",
        text : "첫결제할인",
        brand : "ssg"
    },
    {
        id : 2,
        rate : 6,
        price : "isView",
        percent : "isNonView",
        logo : samsungLogo,
        card : "SSG.COM 삼성카드",
        text : "첫결제쿠폰/즉시할인",
        brand : "samsung"
    },
    // {
    //     id : 3,
    //     rate : 8,
    //     price : "isNonView",
    //     percent : "isView",
    //     logo : samsungLogo,
    //     card : "삼성카드",
    //     text : "쓱페이결제시 청구할인",
    //     brand : "samsung"
    // }
]

export default cardPromotionDatas;