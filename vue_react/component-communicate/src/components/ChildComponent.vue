<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="sendMessageToParent">发送消息给父组件</button>
    </div>
</template>

<script setup>
import {
    ref,
    defineProps,
    defineEmits
} from 'vue'
const props = defineProps({
    title: String,
    required: true
})
const childMessage = ref('Hello, parent!')
// emits 汇报 触发
const emits = defineEmits(['child-message']) // 子组件调用child-message 告知父组件
const sendMessageToParent = () => {
    emits('child-message', childMessage.value)
}
</script>

<style scoped>

</style>