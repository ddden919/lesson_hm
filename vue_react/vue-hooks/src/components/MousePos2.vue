<template>
    <div>
        <p>Mouse X: {{ mousePos.x }}</p>
        <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
</template>

<script setup>
// composition API 模块化 vue3的核心亮点
import {
  reactive,
  onMounted,
  onUnmounted
  // 生命周期lifecycle
} from 'vue'

// const x = ref(0)
// const y = ref(0)
const mousePos = reactive({
  x: 0,
  y: 0
})

const mousePosHandler = (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
  console.log('还在');
}

onMounted(() => {
  window.addEventListener('mousemove', mousePosHandler)
})
// 防止内存泄漏
onUnmounted(() => {
  window.removeEventListener('mousemove', mousePosHandler)
})
</script>

<style scoped>

</style>