<template>
<template v-for="(item,index) in props.menuData">
  <!-- 无子菜单 -->
  <el-menu-item
    @click="handleClick(item, `${props.index}-${item.meta.id}`)"
    v-if="!item.children || item.children.length === 0" 
    :index="`${props.index}-${item.meta.id}`"
    :key="`${props.index}-${item.meta.id}`
    ">
    <el-icon size="20">
      <component :is="item.meta.icon"></component>
    </el-icon>
    <span>{{ item.meta.name }}</span>
  </el-menu-item>
  <!-- 有子菜单 -->
  <el-sub-menu 
    v-else
    :index="`${props.index}-${item.meta.id}`">
    <template #title>
      <el-icon size="20">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.name }}</span>
    </template>
    <!-- 递归调用显示子菜单 -->
    <TreeMenu
      :index="`${props.index}-${item.meta.id}`"
      :menuData="item.children"
    />
  </el-sub-menu>
</template>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { useMenuStore } from '../store/menu';

const props = defineProps(['menuData', 'index'])
// 创建路由实例
const router = useRouter();

const store = useMenuStore();
// 点击菜单
const handleClick = (item, active) => {
  store.addMenu(item)
  router.push(item.meta.path)
}
</script>

<style lang="scss" scoped>

</style>