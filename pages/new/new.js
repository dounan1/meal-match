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

    var restaurants = app.globalData.restaurants

    // Create new restaurant
    var restaurant = {
      "id": restaurants.length + 1,
      "name": name,
      "address": address,
      "description": description,
      "image": image
    };

    restaurants.push(restaurant);

    // set data on index page and show
    wx.navigateTo({
      url: '/pages/index/index'
    });

  }
})



