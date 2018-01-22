//index.js
var app = getApp()

Page({
  data: {
    
  },
  onLoad: function (options) {
  
    // Display toast when loading
    wx.showToast({
      title: 'Updating',
      icon: 'success',
      duration: 3000
    });

    // Update local data
    this.setData(app.globalData)
  },

  showRestaurant(e) {
    const data = e.currentTarget.dataset;
    const restaurant = data.restaurant;

    wx.navigateTo({
      url: `../show/show?id=${restaurant.id}`
    });
  }

})