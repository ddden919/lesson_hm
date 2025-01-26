# tailwindcss

- 不用写css
- bootstap等css 框架一样，提供了类名，直接用就好
- stylus 之后，css 领域里的重大突破
- **原子**类
- 类名带有解释性，text-lg 对prompt engineering 有帮助 AIGC

## 安装tailwind

- css 编译器
  npm install -D tailwindcss postcss autoprefixer
  - D dev 开发环境 上线不需要 开发的时候用tailwindcss 生成css
    stylus -> css
  - npx tailwindcss init -p
    tailwindcss 初始化
    - tailwind.config.js 配置文件
      content: []