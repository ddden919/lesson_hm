// hooks params use 好用
import { useParams } from "react-router-dom"
import { useEffect } from "react"

const PostShow = () => {
    // 路由参数
    const {postId} = useParams()
    console.log(postId)
    useEffect(() => {
        document.title = `文章id为 ${postId}`
    }, [])
    return (
        <div>
            <h1>PostShow</h1>
        </div>
    )
}

export default PostShow