var common = require('./hot-template/hot.js');
var categoryList = require('./hot-category-template/category.js');
Page({
  data: {
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
        }
      ]
    },
    currentTab: 0,
    productList: [],
   
    

   
  },
  onLoad: function () {
    
    this.setData({
      imageInfo: common.imageInfo,
      categoryList: categoryList.categoryList

    })
  },
  setTab: function (e) {
    
    const edata = e.currentTarget.dataset;
    const key = e.currentTarget.dataset.tabindex;
    if (key > 0) {
      var hid_one = 'none';
      var hid_two = 'block';  
    }
    else 
    {
      var hid_one = 'blcok';
      var hid_two = 'none';
    }
    this.setData({
      showtab: edata.tabindex,
      currentTab: key,
      hidden_one: hid_one,
      hidden_two: hid_two

    })
  }

  
})
