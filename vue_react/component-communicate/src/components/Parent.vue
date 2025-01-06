<template>
    <div>
        <!-- 在模版中使用ref在模版中引用DOM元素 -->
        <Child ref="comp"/>
        <button @click="handlerClick">按钮</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './Child.vue'

const comp = ref(null); // 标记DOM元素 null 组件还没挂载，DOM也不在
// const title = ref('Hello'); // 标记数据

const handlerClick = () => {
    console.log(comp.value.children)
    comp.value.someMethods()
    // comp.value.handlerClick()
}
</script>

<style scoped>

</style>