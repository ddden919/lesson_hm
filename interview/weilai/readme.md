# 蔚来面试题
  综合起来，是比较优质的面试

## 面试题会有哪些
  - 介绍自己
  - 项目的亮点和难点
  - 八股文
    css/es6/html5/js
  - vue/react 的知识点和底层原理
  - 手写题
  - 算法题
  - 计算机基础(网络/操作系统/数据库/编译原理)
  - 性能优化
  - 工程化

### 计算机基础
  1. DNS Domain Name System 域名解析系统，是将域名转换为IP地址的分布式数据库系统。
  IP 地址不会记忆
  ping juejin.com
  juejin.com -> ip 映射
  cn/com/net 注册和购买 g.cn jd.com mi.com

    - DNS 解析(查询)过程(路径)
    - juejin.cn 上过这个域名，会有缓存
        - 浏览器缓存(chrome://net-internals/#dns)
        - 操作系统本地缓存 程序间的dns共享(ipconfig /displaydns)
        - 路由器缓存
        - 本地hosts文件
    - x.com 没有缓存，向上级查询
        - 查询本地的dns 解析器(我们的上网提供商 电信/移动/联通) 绝大多数的解析工作完成了
    - 递归查询dns 服务器 县-市-省-国家
    - 顶级域名服务器 .com .cn .net .org .gov 查询 拿到ip地址
    - dns 服务器 缓存
    - 本地 缓存
  2. 以下程序的输出结果
    - sort api 的理解 a-b b-a
    - 修改数组
      push pop shift unshift splice reverse
    - 不修改数组
      slice map filter concat join ...

  - 如何获取白屏时间 性能优化
    白屏时间(性能优化的专业术语 First Paint Time) 浏览器从响应用户输入地址到浏览器开始显示内容的时间
    DomContentLoaded(html 结构 触发) 事件 onload 事件(晚)

    白屏时间 = 页面开始展示的时间点(body中第一个标签被渲染) - 开始请求的时间点

    白屏会发生的东西
    dns 解析 -> 建立TCP 链接 -> 发送http 请求 -> 服务器处理请求 -> 服务器响应请求 -> 浏览器解析html -> 浏览器渲染页面 -> 页面展示

    物理层 网卡(mac地址) -> 数据链路层(以太网帧) -> 网络层(ip) -> 传输层(tcp/udp) -> 应用层(http)

    网络、服务器性能、前端页面结构

