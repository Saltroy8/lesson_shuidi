'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // blog
  // 新增
  // 显示博客列表
  // 某篇博客的详情
  // url  /  method  get  控制器
  router.get('/', controller.home.index);
  // // 显示博客列表 所有的博客都查出来
  router.get('/posts', controller.post.index);
  // // 显示某篇博客
  // router.get('/posts/:id');
  // //填写一个表单
  router.get('/posts/create', controller.post.new);
  // 提交表单
  router.post('/posts', controller.post.create);
  // // 删除某篇文章
  // router.delete('/posts/:id');
  // // 修改文章
  // router.put('/posts/:id');

};
