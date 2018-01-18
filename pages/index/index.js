//index.js
var app = getApp()

Page({
  data: {
    
  },
  onLoad: function (options) {
    let that = this;

    // Display toast when loading
    wx.showToast({
      title: 'Updating',
      icon: 'success',
      duration: 3000
    });

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/restaurants",
      method: 'GET',
      success(res) {
        const restaurants = res.data;

        // Update local data
        that.setData({
          restaurants: restaurants,
        });

        wx.hideToast();
      }
    });

  },

  showRestaurant(e) {
    const data = e.currentTarget.dataset;
    const restaurant = data.restaurant;

    wx.navigateTo({
      url: `../show/show?id=${restaurant.id}`
    });
  }

})