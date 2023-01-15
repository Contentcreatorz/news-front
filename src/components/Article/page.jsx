import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchCommentsByArticleId } from "../../utils/api"
import { Loading } from "../loading"
import { CommentsList } from "./comments/comments"
import { Article } from "./singleArticle/article"


export const ArticlePage = ({ users }) => {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])
    useEffect(() => {
        Promise.all([fetchArticleById(id), fetchCommentsByArticleId(id)])
            .then(([article, comments]) => {
                article.authorName = users.find(user => user.username === article.author).name
                setArticle(article)
                setComments(comments)
                setLoading(false)
            })
    }, [id])

    if (loading) return (<Loading />)

    return (<><Article article={article} />
        <CommentsList comments={comments} />
    </>)

}
