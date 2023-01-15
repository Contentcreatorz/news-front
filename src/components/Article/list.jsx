import { useEffect, useState } from "react"
import { fetchArticles, fetchUsers } from "../../utils/api"
import { createAndAssignAuthorReference } from "../../utils/display"
import { Loading } from "../loading"
import { ArticleCard } from "./card"

export const ArticleList = ({ users }) => {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchArticles()
            .then(articles => {
                setArticles(createAndAssignAuthorReference(articles, users))
                setLoading(false)
            })
    }, [])

    if (loading) return (<Loading />)

    return (articles
        .map(article => (<ArticleCard key={article.article_id} article={article} />)))
}