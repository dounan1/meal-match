// pages/show/show.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    "reviews": [
      {
        "id": 1,
        "name": 'Gab',
        "image": 'https://kitt.lewagon.com/placeholder/users/gabriel-dehan',
        "date": '01/13/17',
        "content": 'Best food ever!'
      },
      {
        "id": 2,
        "name": 'Gray',
        "image": 'https://kitt.lewagon.com/placeholder/users/graysdays',
        "date": '01/10/17',
        "content": 'Love the service'
      },
      {
        "id": 3,
        "name": 'Alex', 
        "image": 'https://kitt.lewagon.com/placeholder/users/alex-felix',
        "date": '01/09/17',
        "content": 'Had a great time :)'
      }
    ]
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
        const restaurant = res.data;

        // Update local data
        that.setData(
          restaurant
        );

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