Page({
  data:{
    entities:[
      {
        imageUrl: 'http://pic1.zhimg.com/50/v2-493a41f45284e98ceae87cab0f8ccd42_hd.jpg',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: 'http://pic1.zhimg.com/50/v2-2c0c72cfd8a81522dd9ff0abe12ded4d_hd.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20180312/96ce379df5c143d7bb5e2892eb9e15c9.jpeg',
        title: 'C',
        description: 'cc'
      },
      {
        imageUrl: 'http://pic1.zhimg.com/50/v2-493a41f45284e98ceae87cab0f8ccd42_hd.jpg',
        title: 'A',
        description: 'aa'
      },
      {
        imageUrl: 'http://pic1.zhimg.com/50/v2-2c0c72cfd8a81522dd9ff0abe12ded4d_hd.jpg',
        title: 'B',
        description: 'bb'
      },
      {
        imageUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20180312/96ce379df5c143d7bb5e2892eb9e15c9.jpeg',
        title: 'C',
        description: 'cc'
      }
    ]
  },
  onLoad(){
    console.log('onLoad');
  },
  onReachBottom(){
    console.log('触底了');
    const data = [...this.data.entities,...this.data.entities]
    this.setData({
      entities:data
    })
  }
})