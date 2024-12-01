# AI 全栈项目

- 架构
  - frontend 前端
  - backend 后端
    数据接口 user.json 数据文件
    文件型数据
    http服务 http:localhost:3001/users
    json-server 
    - 提供数据接口
      - npm i json-server
        - http server 响应http 请求 localhost 127.0.0.1
        - json 文件 json-server --port 3001 --watch user.json
      - script
        "dev": "json-server --port 3001 --watch user.json"
      - npm run dev 启动脚本
  - llm ai server
