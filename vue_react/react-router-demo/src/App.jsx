// 页面级别组件
// 二级路由 about  /about
// Outlet 路由出口 router-view

import {
  Outlet,
  NavLink
} from "react-router-dom"
import './App.css'
function App() {


  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}

export default App
