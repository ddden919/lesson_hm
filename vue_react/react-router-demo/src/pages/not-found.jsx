import { useState, useEffect } from "react"

// react 新特性 hooks 全面内置hooks，vue 学了点
// use 开头 hooks 函数式编程

const NotFound = () => {
    const [count, setCount] = useState(0)
    // 副作用hooks 生命周期挂载后执行并且组件重新渲染后又执行(没加第二个参数，每次重新渲染都会执行)
    // 加了第二个参数，只有第二个参数的值发生变化才会执行
    useEffect(() => {
        console.log('title 执行了')
        document.title = 'Not Found'
        return () => {
            console.log('title 销毁了')
        }
    }, [])

    const add = () => {
        setCount(count + 1)
    }
    // 更新hooks
    useEffect(() => {
        console.log('count更新了')
    }, [count])
    return (
        <div>
            <h1 onClick={add}>404</h1>
        </div>
    )
}

export default NotFound