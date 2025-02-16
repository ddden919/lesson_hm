<template>
  <div>
    About
    <button @click="goHome">回到首页</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router' // 导入路由钩子

const router = useRouter() // 获取路由实例 总管

const goHome = () => {
  // js 跳转 BOM API
  // Browser Object Model > DOM
  // BOM API
  // 破坏了单页应用的特性
  // window.location.href = '/' // 回到首页
  // 路由跳转
  router.push('/') // 回到首页
}
</script>

<style  scoped>

</style>