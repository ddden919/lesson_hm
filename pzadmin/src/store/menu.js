// store/menu.js
// 从 pinia 库中导入 defineStore 函数，用于定义一个 store
import { defineStore } from 'pinia'
// 从 vue 库中导入 ref 和 reactive 函数，用于创建响应式数据
import { ref, reactive } from 'vue'

/**
 * 定义一个名为 'menu' 的 store
 * @returns {Object} 包含状态和方法的对象
 */
export const useMenuStore = defineStore('menu', () => {
  // 使用 ref 创建一个响应式的布尔值，用于表示左侧菜单是否折叠，初始值为 false
  const isCollapse = ref(false);
  // 使用 reactive 创建一个响应式的数组，用于存储选中的菜单
  const selectMenu = reactive([]);

  const routerList = ref([])

  /**
   * 切换左侧菜单的折叠状态
   */
  function collapseMenu() {
    isCollapse.value = !isCollapse.value;
  }

  /**
   * 添加菜单到选中菜单列表中
   * @param {Object} payload - 包含菜单信息的对象
   */
  function addMenu(payload) {
    // 直接使用 payload.meta 来简化操作
    // 检查选中菜单列表中是否已经存在该菜单
    if (selectMenu.findIndex(item => item.path === payload.meta.path) === -1) {
      // 如果不存在，则将该菜单添加到选中菜单列表中
      selectMenu.push(payload.meta);
    }
  }

  /**
   * 从选中菜单列表中移除指定菜单
   * @param {Object} payload - 包含要移除菜单信息的对象
   * @returns {boolean} - 删除操作是否成功
   */
  function closeMenu(payload) {
    // 检查 payload 是否包含 name 属性
    if (!payload ||!payload.name) {
      console.error('Invalid payload provided to closeMenu. Expected an object with a "name" property.');
      return false;
    }
    // 找到要删除菜单的索引
    const index = selectMenu.findIndex(item => item.name === payload.name);
    // 如果找到该菜单，则从数组中删除它
    if (index!== -1) {
      selectMenu.splice(index, 1);
      return true;
    }
    return false;
  }

  // function dynamicMenu(payload) {
  //   console.log(payload);
  //   // 通过glob导入文件
  //   const modules = import.meta.glob('../views/**/**/*.vue')
  //   console.log(modules);

  //   function routerSet(router) {
  //     router.forEach(route => {
  //       // 判断有component属性 没有子菜单 拼接路由数据
  //       if (!route.children) {
  //         const url = `../views${route.meta.path}/index.vue`
  //         // 拿到获取的vue组件
  //         route.component = modules[url]
  //       } else {
  //         routerSet(route.children)
  //       }
  //     })
  //   }
  //   routerSet(payload)
  //   // 拿到完整的路由数据
  //   routerList.value = payload
  // }

  return { isCollapse, selectMenu, routerList, collapseMenu, addMenu, closeMenu };
});