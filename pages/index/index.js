//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner_bg1.png',
      '../../images/banner_bg_2.png',
      '../../images/banner_bg_3.png',
      '../../images/banner_bg_4.png'
    ],
    activity_list:[
      {
        img:'icon-shouyinji',
        text:'私人FM'
      },
      {
        img: 'icon-webicon315',
        text: '每日推荐'
      },
      {
        img: 'icon-icon-4',
        text: '歌单'
      }, {
        img: 'icon-paixingbang',
        text: '排行榜'
      }
    
     

    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  searchMusic:function(value){
    console.log(value.detail.value);
  
  }
  
})
