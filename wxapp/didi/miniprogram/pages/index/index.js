const app = getApp();

Page({
  data: {
    currentTab:3,
    navScrollLeft: 0,
    navData:[
      {
        name: '专车'
      },
      {
        name: '快车'
      }
    ]
  },
  showUser(){
    console.log(app);
    // 用户如何点击了授权，就显示小家
    // 如果没有则去登录
    wx.navigateTo({
      url:"/pages/login/login"
    })
  },
  onLoad(){
    //请求数据
    wx.request({
      url: 'http://localhost:1314/indexPage',
      success: (res) => {
        // console.log(res);
        const navData = res.data.navData;
        this.setData({
          navData
        })
      }
    })
  },
  switchNav(e){
    const cur = e.currentTarget.dataset.current;
    console.log(cur);
    this.setData({
      currentTab: cur
    })
  }
})