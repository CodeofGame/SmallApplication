// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:"梦里飘雪"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content=[
      {
        author:"梦里飘雪",
        title:"麻辣龙利鱼",
        titleImage:"/images/Avatar/1.jpg",
        image:"/images/1.jpg",
        content:"将龙利鱼腌制好",
        comments:12,
        favourite:122
      },
      {
        author: "饭饭烘焙",
        title: "红豆酥皮饼",
        titleImage: "/images/Avatar/2.jpg",
        image: "/images/2.jpg",
        content:`酥皮红豆饼以其酥皮多层，酥融可口而出名。才出炉的红豆饼就像施了魔法般美味，一个完全不够。冬天吃红豆酥皮饼，夏天可以把红豆替换成绿豆，清热解毒。

            红豆提前泡一晚，用高压锅或者小炖锅煮烂，沥干水分，放入锅中，加适量白糖，用小火炒至一部分变成泥状，关火。`,
        comments: 100,
        favourite: 101
      },
      {
        author: "饭饭烘焙",
        title: "脏脏包/原谅包/白富美干净包",
        titleImage: "/images/Avatar/3.jpg",
        image: "/images/3.jpg",
        content:`酥皮红豆饼以其酥皮多层，酥融可口而出名。才出炉的红豆饼就像施了魔法般美味，一个完全不够。冬天吃红豆酥皮饼，夏天可以把红豆替换成绿豆，清热解毒。

            红豆提前泡一晚，用高压锅或者小炖锅煮烂，沥干水分，放入锅中，加适量白糖，用小火炒至一部分变成泥状，关火`,
        comments: 102,
        favourite: 102
      }
    ];
    
    this.setData({
      postkey: post_content
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})