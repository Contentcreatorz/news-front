import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchUsers } from "../utils/api"
import { Article } from "./Article"
import { Loading } from "./Loading"
import './SingleArticle.css'

export const ArticlePage = () => {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [authorName, setAuthorName] = useState('')

    useEffect(() => {
        Promise.all([fetchArticleById(id), fetchUsers()])
            .then(([article, users]) => {
                setArticle(article)
                setAuthorName(users.find(({ username }) => username === article.author).name)
                setLoading(false)
            })
    }, [id])

    if (loading) return (<Loading />)

    return (<Article article={article} authorName={`: ${authorName}`} />)
}