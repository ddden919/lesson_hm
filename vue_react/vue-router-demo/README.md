# vue 全家桶之 vue-router 路由
  
- vue 语法 组件(vue2 选项式/vue3 组合式 大型项目)、响应式、生命周期、指令(v-bind/v-model/v-if/v-for/v-show...)、三种数据(自有数据ref、props、computed)
- vue-router 路由 vue 周边生态
  - 跳转到其他页面 路由
  - npm i vue-router@4
- vuex/pinia 状态管理


## vue-router 路由
- 将接管路由，像交警一样
- router-link 取代a标签
  不同于常规的 <a> 标签，我们使用组件 RouterLink 来创建链接。这使得 Vue Router 能够在不重新加载页面的情况下改变 URL，处理 URL 的生成、编码和其他功能。我们将会在之后的部分深入了解 RouterLink 组件。
  router-link 组件包含a的功能，路由对应的组件显示到相应位置
  要启用，组件没有生效 无法识别的组件 -> div元素
  - 向vue 添加vue-router

- router 专门的目录
  - index.js 入口配置文件
  - router-link 是 vue-router 提供的组件，use(router)不用引入就可以生效
  - router-view 是路由对应的组件显示到相应位置