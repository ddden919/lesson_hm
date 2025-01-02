# es6 promise

  Promise 类，专门解决异步耗时性的问题，执行流程可控
  - 其他大型语言一般是同步的，js通过es6的promise类来解决了单线程的异步不可控的问题
    promise 让异步变成了同步的 提供了完善解决异步任务的机制
  - 口袋 装耗时性的内容 executor 立即执行
    - resolve, reject 两个函数参数
      - resolve 成功解决promise，then执行
      - reject 失败了，catch 执行
  - then 方法 等他完成后
    resolve(data) 后执行回调函数，data 传给回调函数
  - catch 方法
    reject(error)后执行回调函数，error 传给回调函数
  - 三种状态
    - pending 等待状态 实例化后，resolve, reject 之前
    - fulfilled 成功状态 resolve后，then执行，得从pending状态转换到fulfilled状态
    - rejected 失败状态 reject后，catch执行，得从pending状态转换到rejected状态

  - promise 诺言 状态只会从pending 到 fulfilled 或者 rejected 状态
    - 状态一旦改变，就不会再变
    - 状态改变不可逆