// 本地状态
// counter 数据状态 0  const [count, setCount] = useState(0)
// 中央？ 状态 -> redux actions 动作
// 创建 Redux 状态切片管理
import { createSlice } from '@reduxjs/toolkit';
// counter 状态切片
// counter slice 状态管理工作
const counterSlice = createSlice({
    name: 'counter', // 切片名称 用来区分不同的切片
    initialState: { value: 0 }, // 初始状态
    // 可以声明一些函数，纯函数，用来修改状态 actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        // 上个状态，action reducer 当前状态 -> 上个状态 -> reducer函数(生产新状态的函数)
        decrement: (state) => {
            state.value -= 1;
        }
    }
})
// reducer 管理状态
// 旧状态 -> 动作 -> 新状态  处理状态的函数叫 reducer 函数 纯函数？ 只为生产状态，其他不干
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;