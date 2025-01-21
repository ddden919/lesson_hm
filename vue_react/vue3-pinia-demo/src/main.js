import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

// 大型项目
// 返回 pinia 实例 vue 全家桶中的 store

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
