import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const chatApi = async (message) => {
  // 请求行 method + url + http 版本
  // 5173 -> 3000 跨域问题 cors 服务器端，jsonp?
  const response = await axios.post('http://localhost:3000/chatai',
    // 请求体
    message, {
    // 请求头
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  return response.data;
}

// react 内置 hooks 函数 副作用
const App = () => {
  // useEffect 第一个参数是一个函数 第二个参数是一个数组 数组里面是依赖项
  // useEffect 不能直接使用 async await 必须使用函数包裹
  useEffect(() => {
    // 副作用 mounted updated unmounted ......
    // await chatApi('你好')
    const callChatAPI = async() => {
      await chatApi({message:'你好'})
    };
  })
  return (
    <div>
      App
    </div>
  )
}

export default App;