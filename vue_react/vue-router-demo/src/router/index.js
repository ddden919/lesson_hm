// 路由配置
import {
    createRouter,  // 创建路由实例
    createWebHashHistory  // 路由模式
} from 'vue-router' // 插件
// 相对路径 ./当前目录 ../上一级目录
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// posts 模块 post文件夹
import PostIndex from '../views/post/index/Post-index.vue'
import PostShow from '../views/post/show/Post-show.vue'
// 路由配置
const routes = [
    {
        path: '/', // 路径
        component: Home // 组件
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts',
        component: PostIndex
    },
    {
        path: '/posts/:postId', // 动态路由
        component: PostShow
    }
]
// 路由实例
const router = createRouter({ // 创建路由实例
    history: createWebHashHistory(), // 路由模式
    routes // 路由配置数组
})

export default router
