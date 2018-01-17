// pages/edit/edit.js

var app = getApp()
Page({
  data: {
    loading: false,
  },

  // Retrieve user info
  onLoad: function (options) {
    let restaurant = {
      "id": options.id,
      "name": options.name,
      "address": options.address,
      "description": options.description,
      "image": options.image
    };

    // Update local data
    this.setData(restaurant);
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

    let name = e.detail.value.name;
    let image = e.detail.value.image;
    let description = e.detail.value.description;
    let address = e.detail.value.address;
    let id = this.data.id;

    // set data on index page and show
    wx.redirectTo({
      url: `/pages/index/index?id=${id}&name=${name}&image=${image}&description=${description}&address=${address}`
    });

  }
})



