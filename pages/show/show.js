// pages/show/show.js
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

    let restaurant = {
      "id": options.id,
      "name": options.name,
      "address": options.address,
      "tag": options.tag,
      "image": options.image
    };
    
    // Update local data
    this.setData(restaurant);   
  },

  onReady() {
    const that = this;
    wx.setNavigationBarTitle({
      title: that.data.name,
    });
  },

  editRestaurant(e) {
    const data = e.currentTarget.dataset;

    wx.redirectTo({
      url: `/pages/edit/edit?id=${data.id}&name=${data.name}&image=${data.image}&tag=${data.tag}&address=${data.address}`
    });
  },

  deleteRestaurant(e) {
    const data = e.currentTarget.dataset;

    wx.redirectTo({
      url: `/pages/index/index?id=${data.id}`
    });
  },
 
})