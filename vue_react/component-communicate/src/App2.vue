<script setup>
// composition API
import {
  ref, // 简单数据类型
  reactive // 复杂数据类型
} from 'vue'

// 组合式API
//counter 计数业务
const counter = ref(0); // 简单数据类型
const increment = () => {
  counter.value++; // value
};

// user form 对象数据 业务不同
const state = reactive({
  name: 'Alice',
  age: 25
});
const updataState = () => {
  state.name = 'Bob';
  state.age = 30;
};

</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">+1</button>
    <p>Name:{{ state.name }}</p>
    <p>Age:{{ state.age }}</p>
    <button @click="updataState">更新</button>
  </div>
</template>

<style scoped>

</style>
