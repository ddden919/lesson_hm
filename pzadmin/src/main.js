import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import panelHead from './components/panelHead.vue'
// pinia持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// 路由守卫
router.beforeEach((to, from) => {
  const token = localStorage.getItem('pz_token')
  // 非登录页面token不存在
  if (!token && to.path !== '/login') {
    return '/login'
  } else if (token && to.path === '/login') {
    return '/'
  } else {
    return true
  }
})

import * as ElementPlusIconsVue from '@element-plus/icons-vue'  // 全局引入图标
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('panelHead', panelHead)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
// 路由挂载
app.use(router)
app.use(pinia)
app.mount('#app')
