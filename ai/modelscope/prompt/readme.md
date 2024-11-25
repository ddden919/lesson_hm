# Prompt 设计模式

- 吴恩达 Prompt Engineering for Developers

- LLM 开发的模版
  - 代码工程
  1.npm init -y
  2.将dependencies：{}部分拷贝过去
   npm install
   node 后端项目的依赖

- dotenv 的理解
  - process.env 对象
  - key 不能在代码中以明文出现
  - 项目根目录下添加.env 文件,包含key等信息
  - 不能提交到github .gitignore 添加这类文件的申明
  - dotenv.config() 将.env 读入process.env 对象中