// pages/show/show.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let that = this;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/restaurants/${options.id}`,
      method: 'GET',
      success(res) {
        let restaurant = res.data;
        let comments = restaurant.comments;

        // Update local data
        that.setData(
          restaurant
        );

        that.setData({ 
          reviews: comments 
        });

        wx.hideToast();
      }
    });
    
  },

  onReady() {
    const that = this;
    wx.setNavigationBarTitle({
      title: that.data.name,
    });
  },

  // binded to edit button
  editRestaurant(e) {
    const data = e.currentTarget.dataset;

    wx.navigateTo({
      url: `/pages/edit/edit?id=${data.id}`
    });
  },

  // binded to delete button
  deleteRestaurant(e) {
    const data = e.currentTarget.dataset;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/restaurants/${data.id}`,
      method: 'DELETE',
      success(res) {
        // set data on index page and show
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  },
 
})