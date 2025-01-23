import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import router from './router/index.ts'
import 'wc-waterfall'
import App from './App.vue'
import lazy from './directives/lazy.ts'
const app = createApp(App)

app.use(createPinia()) // pinia启用
app.use(router)
app.directive('lazy', lazy);
app.mount('#app')