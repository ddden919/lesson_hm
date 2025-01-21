<template>
    <div>
        <h2>CompaA</h2>
        <p>count:{{ counterStore.count }}</p>
        <button @click="counterStore.increment">+1</button>
        <!-- <CompSubA :count="count"/> -->
         <CompSubA />
    </div>
</template>

<script setup>
// import { defineProps, defineEmits } from 'vue'
import CompSubA from './CompSubA.vue'

// const props = defineProps({
//     count: {
//         type: Number,
//         required: true
//     }
// })

// const emits = defineEmits(['add'])
// function addCount() {
//     emits('add')
// }

// 引入中央模块
import { useCounterStore } from '../store/counter';
const counterStore = useCounterStore();
console.log(counterStore);
// const { count, increment } = counterStore;
</script>

<style scoped>

</style>