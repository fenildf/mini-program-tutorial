// pages/test-component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    componentdata: {
      name: 'ramwin',
      age: 18,

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  sing: function(e) {
    console.log("唱歌了");
    console.log(e.detail);
    console.assert(e.detail.mydetail == 'mydetail');
    /* this.setData({  // 如果外部数据修改，这会触发数据的变化
      "componentdata": {
        name: 'ramwin',
        age: 25
      }
    }) */
  },
  changeage: function(e) {
    console.log("变回18")
    this.setData({
      "age": 18,
      componentdata: {
        name: 'ramwin',
        age: 18,
      }
    })
  }
})