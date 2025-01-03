<template>
    <div>
        <div>PostShow{{ postId }}</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router' // 导入路由钩子
const route = useRoute() // 获取当前路由信息
const { postId } = route.params // 获取路由参数
console.log(route) // 打印路由参数
</script>

<style scoped>

</style>