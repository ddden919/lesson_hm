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
import PostMeta from '../views/post/show/components/Post-meta.vue'
// 路由配置
// 文章模块 复杂应用
const postRoutes = [
    {
        path: '/posts',
        name: 'postIndex',
        component: PostIndex,
        // 路由向页面级别组件传参
        props: {
            sort: 'popular'
        },
        meta: {
            title: "文章列表"
        }
    },
    {
        path: '/posts/:postId', // 动态路由
        name: 'postShow',
        component: PostShow,
        props: true,
        meta: {
            title: "文章详情"
        },
        // 子路由
        children: [
            {
                path: 'meta', // 不用加/ 因为path是相对路径
                component: PostMeta
            }
        ]
    }
]

const routes = [
    {
        path: '/', // 路径
        component: Home, // 组件
        meta: {
            title: "首页"
        }
    },
    {
        path: '/about',
        meta: {
            requireAuth: true, // 路由元信息
            title: "关于"
        },
        name: 'about', // 路由名称
        component: About
    },
    ...postRoutes // 文章模块 扩展运算符

]
// 路由实例
const router = createRouter({ // 创建路由实例
    history: createWebHashHistory(), // 路由模式
    routes // 路由配置数组
})
// 路由守卫
// 每次路由的切换都会执行这个回调
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '智谱华章'
    // to 目标路由对象 from 源路由对象(离开的路由对象) next 放行函数
    // router + routes 构成了前端路由
    // console.log(to, from, '----------');
    if (to.meta.requireAuth) {
        console.log('需要登录');
        next('/login')
    }
    next(); // 放行
})

export default router
