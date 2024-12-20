- react 学习路径
  - react 基础语法 过一遍 （B站|文档）
  - hooks 相关
  - 全家桶
  - 状态管理
  - react 源码
  - Antd...
  - ts

- AI Coding
  - Vue & React 一起搞
  - 自然语义编程
    tailwindcss 语义
    antd 组件

  - 给AI一张设计稿 -> 生成组件
    
- http (CDN 更快) 引入 前端组件库
  - vue
    Vue

- 挂载点
  将前端工作交给vue或者react,在html里面只需要一个挂载点 #root

  挂载 Vue App 应用实例

- vue 哲学 让我们focus 业务的现代前端框架
  - html界面上升到应用的复杂，现在前端的复杂程度越来越高
  - Web应用是数据驱动的界面
  - vue 事件机制 方便 @event="handler"
  - 响应式编程
    - ref(0) 包装简单数据类型成为响应式对象
    - .value = "" 修改value 值改变的同时，界面热更新
    - 规避DOM 编程
    - 不再为API 编程， 而focus 业务开发

- App 和传统编程的区别
  - createApp 创建Vue App 应用实例
  - #root 结合
  - #root 里面的内容 交给 Vue App 应用实例(Vue的世界)
    {{count}}
  - {{}} vue的数据占位符
    可以改变的
    不需要document.querySelector('')
    {{ data }}
    setup() {
      return {
        data: 1
      }
    }


