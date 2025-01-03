<script setup>
const name = "智谱华章" // 数据

</script>

<template>
<div class="page">
  <header class="page-header">
    <h3 class="brand">{{name}}</h3>
    <nav class="menu">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink  to="/about">关于</RouterLink>
      <RouterLink  to="/posts">内容</RouterLink>
    </nav>
  </header>
  <main class="page-body">
    <RouterView />
  </main>

</div>
</template>

<style scoped>

</style>