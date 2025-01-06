<template>
    <div>
        Child
    </div>
</template>

<script setup>
import { defineExpose } from 'vue'
defineExpose({
    children: "这是子组件的属性",
    someMethods() {
        console.log("这是子组件的方法");
    }
})
</script>

<style scoped>

</style>