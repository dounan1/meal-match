//index.js

Page({
  data: {
    restaurants: [
      {
        "id": 1,
        "name": "Hummus Hut",
        "address": "101 Greek Place",
        "tag": "Nobody Has Better Pita",
        "image": "http://askwomenonline.org/wp-content/uploads/2017/12/hummus-recipe-760x428.jpg"
      },
      {
        "id": 2,
        "name": "Pizza Palace",
        "address": "90 italian drive",
        "tag": "More Cheese, More Fun",
        "image": "https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg"
      },
      {
        "id": 3,
        "name": "Mango Madness",
        "address": "2 asian court",
        "tag": "Best Southeast Dishes",
        "image": "https://assets.epicurious.com/photos/57a384e73a12dd9d5602415e/2:1/w_1260%2Ch_630/mango-salad.jpg"
      },
      {
        "id": 4,
        "name": "Bob's Burger",
        "address": "42 american drive",
        "tag": "More Meat Than You Can Eat",
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/11/76/1c/72/stock-burger-co.jpg"
      }
    ]
  },
  onLoad: function (options) {
    // Display toast if form success
    if (options.name || options.id) {
      wx.showToast({
        title: 'Updated!',
        icon: 'success',
        duration: 3000
      });

      var restaurants = this.data.restaurants

      if (options.id !== undefined) {
        
        let index = restaurants.findIndex(restaurant => restaurant.id.toString() === options.id);

        if (options.name !== undefined) { 
          restaurants[index].name = options.name;
          restaurants[index].tag = options.tag;
          restaurants[index].address = options.address;
          restaurants[index].image = options.image;
        } else {
          restaurants.splice(index, 1);
        };

      } else {

        var restaurant =  {
            "id": restaurants.length + 1,
            "name": options.name,
            "address": options.address,
            "tag": options.tag,
            "image": options.image
          };
    
        restaurants.push(restaurant);
      };   

      // Update local data
      this.setData({
        restaurants: restaurants
      });   
    } 

  },

  showRestaurant(e) {
    const data = e.currentTarget.dataset;
    const restaurant = data.restaurant

    wx.redirectTo({
      url: `../show/show?id=${restaurant.id}&name=${restaurant.name}&image=${restaurant.image}&tag=${restaurant.tag}&address=${restaurant.address}`
    });
  },

})