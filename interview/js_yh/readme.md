## 性能优化 跟安全

    
- www.baidu.com 发生了什么？
    全栈启用了https
    状态码 ？ 
    304 
    301 永久性跳转
    302 临时性的跳转
        GET
        POST -> 降级为GET
    307 临时性的跳转
        api POST -> GET
- 点击一个a标签不跳转
    prebent 除了这个呢？ status code
    1XX 目前正常 客户端可以继续发送
    101 Switching Protocol 
    HTTP 升级为websocket 是使用
    2XX 204 没有返回
    205 不返回内容 要求刷新视图， 应用场景， 表单不要多次提交 规避了
    206 应用场景 大文件上传， 
    3XX 
    301 永久跳转 http -> https 域名废弃了， 老用户从老域名出来
    304 not Modified 内容没有修改
        If-Modified-Since 

    400 Bad Request 报文存在错误
    401 Unauthorized
    403 请求被拒绝
    404
    405 Method not allowed
    408 Request Timeout
    409 多个请求冲突
    413 请求数据过大
    414 请求头的字段内容太大

    500 Internal Server Error
    501 Not Implemented
    502 Bad  Gateway
    503  服务器忙
    404

- js 优化我们可以做什么
    - eval with 都不要用
    eval 可以把任何的js 文本运行起来， 黑科技
    特别消耗性能
    安全问题 XSS 
    cookie 可能有用户身份j信息， eval js ajax 发给他自己的服务器jsonp
    用户的cookie 拿到， 
    解决方案是什么？
        - cookie httpOnly  核心的cookie 加上httpOnly 
        - 用户输入，前后端转义，encodeURIComponent <script> '' 
    - 加载的顺序
        css head 尽快看到页面 
        script 阻塞？ defer <script src="" defer >
        因为 js 动态的代码 动态操作dom 下载且执行完毕 
        下载， 放在body 尾部 阻塞
        css 雪碧图，现在还有必要吗？ http 请求少，缺点是， 第一次下载的时候有点慢 css background-position
    ali iconfont 为什么不会影响性能  cdn  字体 阿里， 部署cdn集群 img1.taobao.com
    背景图 直接img  src="" 增加了 http请求  没有http 请求， webpack base64
    如果有请求， http协议更新了 对他的支持，0.9 1.0 1.1 2.0 3.0

- JS 动画优化， requestAnimationFrame
