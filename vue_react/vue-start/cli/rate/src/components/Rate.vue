<template>
    <div>
      {{ rate }}
      {{ count }}
      {{ props.value }}
    </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
let count = ref(0) // 组件自身的响应数据
// 子组件和父组件不一定是一直绑定的，哪里要用往哪里传
// 定义props 业务逻辑 消费数据，不是自身的数据，而和父组件绑定
// 告诉外界，我需要一个什么类型的数据
// 参数数据，外界传入的，不是自身的数据
   let props = defineProps({
     value:Number
   }) // 外界给我一个什么类型的数据
   // 计算属性 数据
   let rate = computed(()=>{
     return "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value)
   })
</script>

<style scoped>

</style>