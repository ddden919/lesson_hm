<template>
   <el-menu
        :style="{width: !isCollapse? '230px' : '64px'}"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="aside-container"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <p class="logo-lg">{{ isCollapse ? 'DIDI' : 'DIDI陪诊' }}</p>
        <TreeMenu :index="1" :menuData="menuData"/>
      </el-menu>
</template>

<script setup>
import TreeMenu from './treeMenu.vue';
import { useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';
import { useMenuStore } from '../store/menu'; // 根据实际路径调整

// 使用 Pinia 的 store
const menuStore = useMenuStore();

// 使用 toRefs 将 store 中的状态解构为独立的响应式引用
const { isCollapse, routerList } = toRefs(menuStore);
const router = useRouter();
console.log(router)
const menuData = reactive(router.options.routes[0].children)
// const menuData = routerList

const handleOpen = () => {
    
}
const handleClose = () => {
        
}
</script>

<style lang="less" scoped>
.aside-container .logo-lg {
    font-size: 20px !important;
    text-align: center !important;
    height: 50px !important;
    line-height: 50px !important;
    color: #fff !important;
}
</style>