<template>
    <div>
        <h2>CompSubA</h2>
        <p>count:{{ count }}</p>
        <hr>
        <p>count:{{ counterStore.count }}</p>
        <!-- <p>message:{{ message }}</p> -->
    </div>
</template>

<script setup>
// import { defineProps, inject } from 'vue'

// const props = defineProps({
//     count: {
//         type: Number,
//         required: true
//     }
// })

// const message = inject('message')
import { toRefs } from 'vue';
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore(); // 本地和中央链接的过程
const { count } = toRefs(counterStore); // 值，响应式丢失了
// reactive 函数创建的响应式对象在解构时会失去响应性。这是因为解构操作会创建一个新的普通对象，而这个对象不再是响应式的。
</script>

<style scoped>

</style>