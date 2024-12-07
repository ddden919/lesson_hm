- 认识几个url
  url的设计模式 restful api
  网站是用来暴露资源的 如何将资源暴露出去 
  - http://localhost:3001/posts/ 列表页的链接
  - http://localhost:3001/posts/:id 详情页的链接 id 查询参数
  - http://localhost:3001/users/:id 用户主页链接

- 数据的查询 Read 
- 访问资源的方式
  - Apifox 是啥？web 请求代理
    Get http://localhost:3001/posts/1
    Patch http://localhost:3001/posts/1
  - 资源 db.json中的users posts
  - HTTP协议
    - Method (动作 GET | PATCH修改 | POST新增) + url (资源) = 请求行
    - 请求头 Cookie    Content-Type:text/json ...
    - 请求体 数据

- json-server 
  - http 服务
  - db.json 数据资源向外提供访问 CRUD

- 会设计restful api 接口
  - 设计路由
  - 设计资源
  - 设计请求方法
  - 设计请求行
  - 设计请求头
  - 设计请求体
  - 设计响应体
  - 设计响应头
  - 设计响应行
  - 设计状态码

  - 需求
    - 新增一篇文章
      http://localhost:3001/posts POST
      {
        ...
      }

    - 删除文章2
      http://localhost:3001/posts/2 DELETE


- json-server 是一个支持restful api 设计的数据服务器


- 全栈防抖
 - 前后端分离 解耦
  - 前端 live-server 5500
    fetch url 
  - 后端 json-server 3001
    url 接口服务 restful
  - API 接口

- filter、map
  - 都是Array.prototype 上的方法，所有的数组都有
  - filter 数组过滤，回调函数返回值是否为true 
  - map 数组映射，回调函数返回值，组成新的数组 原有数组不能满足需求
  - forEach 迭代每一项 不需要返回

- 防抖
  - 将要执行的函数交给一个debounce()高阶函数去优化
  - 减少执行次数 只执行连续输入的最后一次
  - 定时器 本次关掉上一次的定时器