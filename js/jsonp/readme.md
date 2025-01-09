# 跨域

- 运行环境
  - 前端
    V8 引擎在浏览器

  - 后端
    node 封装了V8，剥离了html，借助c++去调用系统服务
    http 模块 就是node 实现的

  - 为什么node 有模块化需求？
    - 引入各种模式
    - 后端功能复杂
    - mvc
      model 连接数据库
      view 页面
      controller 控制器 前端传来的参数校验，逻辑等
  - require -> es6 模块化 module

- 为何要学node？
  - 后端开发
  - 可以做大前端
  - 简单性能好
- nodemon
  -  可以自动重启node 热更新

- CORS policy 同源策略
  - 安全策略
  - baidu(domain) -> google (不受信任) 不同的域名
  - http://127.0.0.1:5500/ js script 所在的域名
  - http://localhost:3000 协议 域名 端口号 任然被认为是不同的域名 block
  - 保护谁？
    - 后端，制定规则
      目前没有block
    - 前端
      JS 限制跨域请求
      JS 可以dom 修改页面的 跨域内容收到限制

- Cross-Origin-Resource-Sharing
  - Origin > Domain + Port + Protocol(域名 + 端口号 + 协议)

## 前后端分离
  - vue 开发前端
  - node/java 开发后端
  - 开发日常 跨域是家常便饭

- 换条路走
  - script + src
    - 不受CORS 限制
    - http 请求将后端api接口资源拿到
      - src = api url
    - 返回url后还可以执行js 返回json 数据
- script 阻塞式加载并执行
- jsonp
  json with padding(函数)
  - 前端需要script 标签 src 执行api url
  - 页面上埋一个全局方法 比如说window.callback
  - 需要后端的配合 后端返回一个函数调用 数据外面包函数
- 封装一个 jsonp 函数
  - url + callback
  -  dom script 挂载 和 window.callback = callback
  
