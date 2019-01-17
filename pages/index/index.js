Page({
  data: {
    imgUrls: [
      '../public/images/tooopen_sy_175833047715.jpg',
      '../public/images/tooopen_sy_175833047715.jpg',
      '../public/images/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,
    navbarActiveIndex: 0,
    showtab: 0,  //顶部选项卡索引
    tabnav: {
      tabnum: 5,
      tabitem: [
        {
          "id": 0,
          "text": "热门"
        },
        {
          "id": 1,
          "text": "男装"
        },
        {
          "id": 2,
          "text": "鞋包"
        },
        {
          "id": 3,
          "text": "百货"
        },
        {
          "id": 4,
          "text": "美妆"
        },
        {
          "id": 5,
          "text": "手机"
        },
        {
          "id": 6,
          "text": "食品"
        },
        {
          "id": 7,
          "text": "食品"
        },
        {
          "id": 8,
          "text": "食品"
        },
        {
          "id": 9,
          "text": "食品"
        },
        {
          "id": 10,
          "text": "食品"
        }
      ]
    },
    currentTab: 0,
    productList: []

   
  },
  onLoad: function () {
  },
  setTab: function (e) {
    const edata = e.currentTarget.dataset;
   
    this.setData({
      showtab: edata.tabindex,
      currentTab: e.currentTarget.dataset.tabindex
     

    })
  }

  
})
