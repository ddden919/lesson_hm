# 字节项目学习

- Vue 纯前端项目
  创建 Vue + TS  vue-router pinia 全家桶
  全新项目，github 新建
- Vue + KOA + MySQL 全栈项目
- TS 放心使用
  - TS 像写java一样写js 强大的类型约束
- vue-router
  - RouterRecordRow 类型约束
  - redirect 重定向/home
- src/shim-tsx.d.ts
  - 解决 tsx 语法报错

- vant UI 组件库
  - element-ui 不太一样 包小，更好
    按需加载 .use(list)

  - vite 工程化
    预先加载UI组件库 更快
    vant
    @vant/auto-import-resolver
    vite 支持
    Components({
      resolvers: [VantResolver()]
    })
- 移动端 App
  - vant 适合移动端 element-ui 适合PC端
  - 路由 App -> router-view -> KeepAlive redirect -> Home
  - 图标字体库 iconfont 由阿里提供 https://www.iconfont.cn/
    - 在线选择需要的图标
  - 组件 + 状态管理(pinia)
- @ 路径的别名 alias  /src

    