import React, { useEffect } from 'react'
// 前后端分离 前端独立的路由功能
import {
  // HashRouter as Router, 在入口文件中配置
  // es6 模块化语法
  // BrowserRouter as Router, // hash #, history /
  Routes,
  Route
} from 'react-router-dom'
import routes from '@/router'
import { ConfigProvider, Button } from 'zarm';
// import 'zarm/dist/zarm.css'; // vite-plugin-style-import 自动引入css
// import { getUserInfo } from './utils';
import NavBar from '@/components/NavBar'
import s from './App.module.less'

export default function App() {
  // useEffect(() => {
  //   // 页面加载时，判断是否有token 登录
  //   (( async () => {
  //     const res = await getUserInfo()
  //     console.log(res)
  //   })())
  // },[])
  return (
    <ConfigProvider primaryColor={'#007fff'}>
      <div className={s.app}>
        <Routes>
          { routes.map(route => <Route key={route.path} path={route.path} element={<route.component />}/>)}
        </Routes>
        <Button theme="primary">Hello World!</Button>
        <NavBar showNav={true} />
      </div>
    </ConfigProvider>
  )
}