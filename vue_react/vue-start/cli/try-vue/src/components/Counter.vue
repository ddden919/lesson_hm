<template>
<div class="counter">
    <!-- {{  }} 模版占位符 数据驱动思想 -->
    <p>Count:{{ count }}</p> 
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
</div>
</template>

<script setup>
import {
    ref
} from 'vue'
const count = ref(0)
const increment = ()=> {
    count.value++
}
const decrement = ()=> {
    count.value--
}
</script>

<style>
.counter{
    text-align: center;
    margin-top:50px;
}
button{
    padding: 10px 20px;
    font-size: 16px;
}
</style>
