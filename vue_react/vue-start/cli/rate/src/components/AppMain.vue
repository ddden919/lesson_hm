<template>
    <main>
       Main
       <h1>你的评分是{{ score }}</h1>
       <Rate :value="score"/>
       <Item />
       <Item />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Item from './Item.vue'
import Rate from './Rate.vue'
// 将数据从父组件传递到子组件
const score = ref(3);
</script>

<style scoped>
main{
    /* 占满剩余空间 */
    flex: 1;
    height: 500px;
    background-color: pink;
}
</style>