- package.json
  项目描述文件
  - dependencies 依赖部分
  - devDependencies 开发依赖部分
  - scripts 脚本
    npm run dev development   

- 版本号 的意义
  > 1.0.0 正式版本 商用 成熟
  - 1.0.0 1主版本 0次更新 0bug修复
  - 2.0.0 Vue2 Vue3
  - 2.2.0 添加了某项新功能
  - 2.2.1 修复了某项bug

  - es6
    - es6 模块化 import from mjs
    - 解构
      对象、数组一次性解构 获得一批变量 
      - 待解构的对象在右边
      - 变量在左边
      - 对象(key){}、数组(下标)[]都可以解构
      - ... rest 剩余运算符

- AI 爬虫的核心
  - 发送请求爬取HTML 完成了输入(html 字符串)
    - http 请求
    - 解析出来 indent

  - 交给大模型 prompt
    `
    ${indent_html}
    Get zhe image link
    `