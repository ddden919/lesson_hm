# 定时器

- JS 是单线程的，只有一个主线程
- setTimeout 是异步执行的计时器，会在主线程执行完后才执行

  callback 函数，时间(ms) 放入一个专有的地方event loop
- 一定会在 指定时间后执行吗？
  不一定，因为主线程的执行时间是不确定的，所以执行的时间是不确定的
- 找回?
  执行的是回调函数
- 定时器ID

- 如何用 setTimeout 实现 setInterval?
  - 场景编程题
  - 手写题 fn
  - customInterval
    - callback，t 参数
    - 可以用setTimeout 实现
    - 在 fn 中调用 setTimeout
    - 递归
    - 关闭?定时器ID