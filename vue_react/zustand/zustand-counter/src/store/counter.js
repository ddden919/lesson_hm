import { create } from 'zustand'
// create 用于创建状态store
// set 用于更新状态 函数
const useCounterStore = create((set) => ({
    count: 0,
    // {} 外面加括号 表示返回一个对象 不加括号 表示返回一个函数
    // 基于当前状态返回新状态
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useCounterStore;