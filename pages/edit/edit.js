// pages/edit/edit.js
var app = getApp()

Page({
  data: {
    loading: false,
  },

  // Retrieve user info
  onLoad: function (options) {
    let that = this;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/restaurants/${options.id}`,
      method: 'GET',
      success(res) {
        const restaurant = res.data;

        // Update local data
        that.setData(
          restaurant
        );

        wx.hideToast();
      }
    });
  },


  // Edit Restaurant 
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

    let restaurant = {
      name: name,
      image: image,
      description: description,
      address: address
    }

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/restaurants/${id}`,
      method: 'PUT',
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



