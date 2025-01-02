# Vue3 组件生命周期
- 组件类实例化
  - template 模板的编译，css 的合成，js的执行
    onBeforeMount
  - 组件挂载到组件树上
- v-if/v-show
  弹窗、广告、loading
  - 条件渲染 true 显示 false 隐藏
  - 区别 v-if 不会挂载到组件树上，v-show 会挂载到组件树上 display: none css切换
  - 显示 -> v-if false -> 销毁组件
  - 隐藏 -> v-if true -> 重新创建组件
  - 有的组件需要toggle 显示/隐藏
    - 响应式数据 showComponent
    - 页面状态？

- 组件是一个类 Vue.Component LifecycleComponent ref + defineProps ... new 实例化
  template + css + js 结合，做好准备工作 -> 挂载到父组件树上 -> 渲染到页面

- v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。
  v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。
  相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。
  总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。
  
  