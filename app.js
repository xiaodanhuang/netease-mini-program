//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    var that = this
    var code=""
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res)
          this.code=res.code
          wx.getUserInfo({
            success: datas => {
            }
          })
          wx.getSetting({
            success: function (res) {
               console.log(res);
            }
          })
        }
        else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
    Page({
      getPhoneNumber: function (e) {
        console.log(e.detail.errMsg)
        console.log(e.detail.iv)
        console.log(e.detail.encryptedData)
      }
    })
  
  },

  globalData: {
    userInfo: null
  }
})