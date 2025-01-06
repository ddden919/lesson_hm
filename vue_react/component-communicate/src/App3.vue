<template>
    <div>
       <h2>父组件</h2>
       <p>这是来自子组件的消息：{{ messageFromChild }}</p>
       <!-- 子组件调用child-message 告知父组件 -->
       <ChildComponent @child-message="handleChildMessage" :title="title" />
    </div>
</template>

<script setup>
// @ 开头的是自定义事件 不是js内置的事件，而是自定义的事件
// 父子组件通信
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';
const title = ref("这是来自父组件的消息已经传入子组件了");
const messageFromChild = ref('');
// 自定义事件 child-message 父子组件间的约定 子组件调用child-message 告知父组件
const handleChildMessage = (message) => {
    console.log('来自子组件的消息：', message);
    messageFromChild.value = message;
};
</script>

<style scoped>

</style>