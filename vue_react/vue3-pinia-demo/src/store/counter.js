// 中央 状态管理 login userInfo
// count 收归中央
// 定义一个count的仓库
import { defineStore } from 'pinia';
import { ref } from 'vue';

// defineStore(仓库id, {state, actions, getters})
// 返回值是一个函数，调用得到仓库实例对象
export const useCounterStore = defineStore('counter', () =>{
    const count = ref(0);
    const increment = () =>{
        count.value += 1;
    }
    return {
        count,
        increment
    }
});