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
    var description = e.detail.value.description;
    var address = e.detail.value.address;

    let restaurant = {
      name: name,
      image: image,
      description: description,
      address: address
    }

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/restaurants`,
      method: 'POST',
      data: restaurant,
      success(res) {
        // set data on index page and show
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });


  }
})



