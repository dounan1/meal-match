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

    var restaurants = app.globalData.restaurants
    let index = restaurants.findIndex(restaurant => restaurant.id.toString() === options.id);
    
    // Update local data
    this.setData(restaurants[index]);   
  },

  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.name,
    });
  },

  editRestaurant(e) {
    const data = e.currentTarget.dataset;

    wx.navigateTo({
      url: `/pages/edit/edit?id=${data.id}`
    });
  },

  deleteRestaurant(e) {
    const data = e.currentTarget.dataset;

    var restaurants = app.globalData.restaurants
    let index = restaurants.findIndex(restaurant => restaurant.id === data.id);

    restaurants.splice(index, 1);

    wx.redirectTo({
      url: '/pages/index/index'
    });
  },
 
})