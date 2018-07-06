// const Img = require('../image/supergirl-season-3-confirmed.jpg')
const Img = require('../image/garfield.png')

let chapterList = {
    0: {
        pages:{
            0:{
                tpl:"start",
                content: []
            }
        }
    },
    1: {
        name: "",

        pages: {
            0: {
                tpl:"textCenter",
                content: [
                    { text: [
                        "您好，",
                        "#.name",
                        "，歡迎來到初始之地"
                        ]
                    },{ text: [
                        "接下來將為您介紹使用方式",
                            ]
                    }
                ]
            },
            1: {
                tpl:"scrollContent",
                content: [
                    { text: [
                        "文字方塊111111111111111111111111111111111111111111111111111111111111"
                        ]
                    },{ text: [
                        "文字方塊22222222222222222222222222222222222222222222222222222222222"
                        ]
                    }
                ],
                pass:true
            },
            2: {
                tpl:"deckSwiper",
                content: [
                    { text: [
                        "文字方塊111111111111111111111111111111111111111111111111111111111111"
                        ]
                    },{ text: [
                        "文字方塊22222222222222222222222222222222222222222222222222222222222"
                        ]
                    }
                ],
                overlayer:[{ text: [
                        "左滑，右滑，選擇正確的方向"
                        ]
                    },{ text: [
                        "點擊開始"
                        ]
                    }],
                cards:[
                      {
                        text: "Card One",
                        name: "SuperGirl",
                        image: Img,
                        value: 'l'
                      },
                      {
                        text: "Card Two",
                        name: "SuperGirl Two",
                        image: Img,
                        value: 'r'
                      },
                      {
                        text: "Card Three",
                        name: "SuperGirl Three",
                        image: Img,
                        value: 'l'
                      },
                      {
                        text: "Card Four",
                        name: "SuperGirl Four",
                        image: Img,
                        value: 'l'
                      }
                ]
            }
        }
    }
}

export default chapterList;