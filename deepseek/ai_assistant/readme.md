# AI Assistant 全栈项目
- 大前端全栈
- 后端驱动全栈为主
  - 设计模式
    大前端 前端 mvvm model(数据模型层 数据状态 useState, ref/reactive, api/axios接口, pinia) view(视图层 页面) vm(视图模型层 数据绑定 事件处理)
    model 模型层 = 数据定义 + 数据处理 + 数据存储 + 数据管理 + 数据请求
    view 视图层 = components 组件 views 页面
    vm 视图模型层 = 数据绑定({} {{}}) + 数据驱动(v-if/v-show/v-for) ... script 事件监听 @change
    写到哪算哪，产品设计线框图 idear 亮点
    后端 mvc 思想 数据库 mysqk table 简历模型
    model 数据库独立于后端 数据模型文件 schema orm
    view 视图层 = 前端页面 index.html about.html
    controller 控制器层 = 路由 router 数据处理 controller
  - 并发数
  - 基础设施
  - DDos 肉鸡公鸡 qps

## 后端全栈AI 项目
- python flask 框架 node koa
- 纯js
- deepseek 在线api
{
    "model":"deepseek-chat",
    "messages": [
        {
            "role": "user",
            "content":"hello"
        }
    ]
}

## 写文章 + leetcode 150+

## 项目准备
- 安装python
  3.10.6以上
- 配置虚拟环境
  本地项目项目依赖 不受全局影响，不影响全局
  python -m venv venv ai_assistant 当前目录创建虚拟环境
  .\ai_assistant\Scripts\activate 激活虚拟环境
- 安装依赖
  pip install openai Flask python-dotenv -i https://mirrors.aliyun.com/pypi/simple/
  
  openai 已经成为了aigc LLM 的事实标准
  /completion /chat
  base_url deepseek
  Flask 后端框架 相当于 node中的koa

  - 没有做前后端分离 mvc 开发模式
    - 前端 static 目录下
    - 路由 / 显示index.html

- 静态文件
  - js/css/img
  - 启动静态服务器

- 状态码
  - 1XX 请求中...
  - 2XX 请求成功 201 Created
  - 3XX 重定向
  - 4XX 客户端错误
    405 Method Not Allowed 方法不允许
  - 5XX 服务器错误

  响应头第一个数据包 浏览器或程序 就通过状态码
  知道怎么处理
  程序逻辑的一部分

- env 环境变量

## 界面

- html 结构
  - 写注释
  - 图标字体库 font-awesome iconfont
    - 性能优化
    - 小图标都用图片的，http请求数的暴涨，网页同时并发请求数是有上限的
    - 下载一个图标字体文件
    - fas fa-comment-alt 图标
    - font-awesome 不支持选择，都是一样的
  - css 样式的组合 面向对象特性 多态 方便复用和维护
    tailwindcss 原子类
  - textarea LLM 支持比较多的tokens 出入长度 kimi deepseek
  - 语义化标签
  - CSS 布局
    - 弹性布局
      - 居中
      - align-items 交叉轴
      - justify-content 主轴 flex-start/center/end/space-between/space-around
      - flex-direction 方向：row/column
      - flex-wrap 换行
    - grid 网格布局
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap 24px
    - 响应式布局
      width + max-width
      @media screen and (max-width: 768px) {
        
      }
    - transition animation
      - width transition ipad 旋转屏幕


  