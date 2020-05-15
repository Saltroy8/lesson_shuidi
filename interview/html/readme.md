- 快速打开页面
  - ssr 服务器渲染 node  .vue template 服务器端.  html   直接输出到req seo
  - ssr 多人打开，特别是电商项目，不适合，会炸 实时编译， template 从前端提前到后端来编译   后端工作压力   SEO
  - 静态化服务 100006729770.html
    GET  /100006729770.html  MVC/SSR  商品详情页 数据库查出数据   node 页面模板<%= %>输出SEO JAVA/NODE
    做的更牛逼  100006729770.html  静态化服务  动态页面
    一个人来访问是   database.   template  compile -> res 之后， 把生成的html png/js/css, 缓存起来，服务器压力降低了，cdn 大家在做的个人网页，全站静态化，基本不太改变 SEO 喜欢纯html网页


    首页静态化一定需要的
    1. 用户都是从首页进入，缓解了服务器压力 中央服务器

