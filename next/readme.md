# next

- react *全栈* 框架
  - SSR 服务器端渲染
    - 首屏加载速度快
    - SEO 优化
    - Next.js是强大的React全栈框架，支持SSR，首屏快且利于SEO，开发高效。
  - vercel
    01.dev AI代码生成工具
  - 企业站
  
- notebook 笔记本
  - 后端 note CRUD
    - next.js 全栈框架
    - redis(内存) mongodb NOSQL
  - 前端
    - noteList 
    - search
    - new 
    - edit
    - delete

- 设计组件？
  layout
  page
    component
- 约定俗成的next
  - alias jsconfig.json
  - page.js 页面
    children vue slot
  - layout.js 布局

- npm 包
  - uuid 随机 高并发
  - dayjs 时间

- 组件的设计
  - 组件的拆分粒度
    - 复用
    - 管理
    - 下线方便
  - 复杂组件
    SidebarNoteItem
    - 可展开收起
    - skeleton 骨架屏
      用户体验优化方案
      loading(菊花)好在哪里？基本的格局
    - 动态样式 展开/激活样式
    - 新增后的动画 flash
      触发onAnimationEnd 时间 移除flash

- react hook
  - useRef
  - useTransition 过渡 发生了transition 动画 就会把 isPending 变成true

- next.js 服务器端组件和客户端组件
  - SidebarNoteItemHeader 粒度细化，拆分之后成为了服务器端组件
  - SidebarNoteItemContent 事件交互... use client 申明

- Suspense
  Suspense 用于处理异步加载，实现优雅过渡
  fallback
  组件的 promise

- 详情页
  - promise 之前 loading.js 会显示
  - skeleton 骨架屏
  - markdown 富文本 转换为html
  - sanitizeHtml 过滤 html 标签 防止xss攻击
  - dangerouslySetInnerHTML 直接渲染html 标签
  ```js
    var a = 1
  ```

  <pre><code class="language-js"> var a = 1 </code></pre>




      



