<template>
    <div>
        <p id="count">Lifecycle Component - Count:{{ count }}</p>
    </div>
</template>

<script setup>
import {
    defineProps,
    onMounted,
    onBeforeMount,
    onUnmounted,
    onBeforeUnmount,
    onBeforeUpdate,
    onUpdated
} from 'vue';
defineProps({
    count: {
        type: Number,
        required: true
    }
});
// console.log('haha');
// 在组生老病死的过程中，会触发生命周期钩子函数
onMounted(() => {
    console.log(document.getElementById('count'), '------')
    // on 某个阶段
    // mounted 挂载
    // 组件挂载完成
    console.log('已经挂载');
})
// 在组件即将挂载的时候
onBeforeMount(() => {
    console.log(document.getElementById('count'), '------')
    console.log('即将挂载');
})
// 在组件即将卸载的时候
onBeforeUnmount(() => {
    console.log('即将卸载');
})
// 组件卸载完成
onUnmounted(() => {
    console.log('已经卸载');
})
// 在组件更新之前
onBeforeUpdate(() => {
    console.log('即将更新');
})
// 在组件更新完成
onUpdated(() => {
    console.log('已经更新');
})
</script>

<style scoped>

</style>