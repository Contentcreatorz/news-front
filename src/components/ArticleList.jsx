import { useEffect, useState } from "react"
import { fetchArticles, fetchUsers } from "../utils/api"
import { ArticleCard } from "./ArticleCard"
import { Loading } from "./Loading"

export const ArticleList = () => {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        Promise.all([fetchArticles(), fetchUsers()])
            .then(([articles, users]) => {
                setArticles(articles)
                setUsers(users)
                setLoading(false)
            })
    }, [])

    const authorNameReference = articles
        .reduce((articleAuthor, { article_id, author }) => (articleAuthor[article_id] = users
            .find(({ username }) => username === author).name) && articleAuthor, {})

    if (loading) return (<Loading />)

    return (articles
        .map(article => (<ArticleCard article={article} authorNameReference={authorNameReference} key={article.article_id} />)))
}