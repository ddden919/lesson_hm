- vue3 响应式
  - ref .value 响应式对象 单个值 Object.defineProperty 性能好
  - reactive 响应式代理 整个对象 Proxy 开销大

- 父子组件通信
  - props 父传子 数组
  - @自定义事件 ="处理函数" 
    自定义事件 + 处理函数 = attrs
  - 子组件 一切由外界传的 都得申明一下
    emits = defineEmits[自定义事件]
  - emits[自定义事件, 要传的参数]

