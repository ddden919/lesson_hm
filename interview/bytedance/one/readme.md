# 第一场字节面试准备

- 穷追猛打

- 基于学长的三个项目(两个)改一改，加到自己的简历中(早期)
  执行力 简历给我 100+ 小公司投递
- 小公司练手(够用)150 小公司实习
- 边上课，写项目(3月20，第二版简历) 中等 200-300
  - 远程 ai + react
- 4月中旬 源码，算法、react/vue 成熟简历 400+

- promise.all
  - fs.readFile node 异步
    java/python 阻塞
    node 异步无阻塞 no blocking 性能好， 20%-30% 服务器性能提升 少用服务器
  - I/O 异步 不好控制执行顺序
    - callback 回调 es5
    - promise
    - async/await
    按顺序读取
    I/O 慢的 (硬盘) 内存 (读取速度比较)
  - es5 callback es6 promise es8 async/await
    js 异步解决方案在进化
    callback 回调地狱被诟病 早期没那么复杂的业务
    promise链式调用 上场了 then return promise
    async await 基于promise 语法糖 await + promise 同步写法一样了
  - promise
  - return promise thenable
  - 封装一个promise 函数
  - 表达的简洁性
- 异步任务 并发怎么办？
  - 多个异步任务 all
    - **promise 实例**放到数组里面
    - **promise.all()** 方法接受一个数组作为参数，数组中的每个元素都是一个 Promise 实例。
    - 所有Promise实例都成功执行，才会返回一个新的 Promise 实例，并且该实例的状态为fulfilled。
    - 会按照数组中的顺序返回结果。
    - 如果有一个 Promise 实例失败，那么整个 Promise.all() 方法都会失败，返回的 Promise 实例的状态为rejected。

    - race
      返回第一个被解决的任务，不管成功还是失败

    - allSettled
      不管成功还是失败，都会返回结果

    - any
      - 只要有一个成功，就返回第一个成功的结果
      - 所有都失败，才返回失败的结果

    - 手写题的套路
      - 通过注释的方式，描述一下思路

- react 性能优化
  - useMemo
  - useCallback

  - interface ts 的核心概念
    自定义类型的一个方式
    和type的区别
    - 子组件 props安全
    - 父组件必须提供Props 约定的参数
  - 组件响应式
    - 改变后 组件函数是会重新运行的
    - 子组件 重新运行，就会重新渲染
      - 开销大 性能问题 没有必要
    - React.memo 缓存组件
      当子组件props 之外的改变时与子组件无关，就不会重新渲染
    - react 有哪些hooks介绍一下
      