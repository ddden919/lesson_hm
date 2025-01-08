# vue hooks 编程

- react 的 hooks 编程，vue 直接抄
- 从vue 功能 -> 组件思维
- 内存泄漏 重要
  组件卸载后不会主动取消事件监听，组件销毁，事件处理函数无法主动被回收
- 生命周期 v-if 组件卸载前打扫内存战场
- 把问题放心交给LLM

- es6 模块化
  - import from 引入
    import Obj from './Obj' export default 默认输出的对象
    import { A, B } from './Obj' export 导出的对象
  - export 导出

- hooks 编程风格
  - 函数式编程
    useMouse use开头，hooks 函数的特征
  - 将响应式业务(状态) 和 UI 分离
  - 组件更好维护，复用性高
  - UI 组件开发工程师
  - 组件拆分为UI界面和业务逻辑

- 组件 = UI + State