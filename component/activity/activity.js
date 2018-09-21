// component/activity/activity.js
// component/icon/icon.js
Component({
  properties: {
    activityList: {
      type: Array,
      value: [], 
      observer: function (newVal, oldVal) {
        this.setData({
          activity_list: newVal
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    activity_list: []
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
