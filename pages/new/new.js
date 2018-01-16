// pages/new/new.js

var app = getApp()
Page({
  data: {
    loading: false,
  },

  // Retrieve user info
  onLoad: function () {    
  },

  // New Restaurant Submission
  bindSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    });

    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    });

    var name = e.detail.value.name;
    var image = e.detail.value.image;
    var tag = e.detail.value.tag;
    var address = e.detail.value.address;

    // set data on index page and show
    wx.navigateTo({
      url: `/pages/index/index?name=${name}&image=${image}&tag=${tag}&address=${address}`
    });

  }
})



