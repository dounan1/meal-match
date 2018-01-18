// pages/edit/edit.js
var app = getApp()

Page({
  data: {
    loading: false,
  },

  // Retrieve user info
  onLoad: function (options) {
    var restaurants = app.globalData.restaurants
    let index = restaurants.findIndex(restaurant => restaurant.id.toString() === options.id);

    // Update local data
    this.setData(restaurants[index]);
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

    var restaurants = app.globalData.restaurants
    let index = restaurants.findIndex(restaurant => restaurant.id === id);

    // Edit restaurant
    restaurants[index].name = name;
    restaurants[index].description = description;
    restaurants[index].address = address;
    restaurants[index].image = image;

    // set data on index page and show
    wx.redirectTo({
      url: '/pages/index/index'
    });

  }
})



