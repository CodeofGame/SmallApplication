Page({
  onTap:function(){
    // wx.redirectTo({ url:"/pages/posts/posts"}

    // );
    wx.navigateTo({ url: "/pages/posts/posts" });
  },
  //页面关闭
  onUnload:function(){
    console.log("onUnload");
  },
  //页面隐藏
  onHide:function(){
    console.log("hide");
  }
})