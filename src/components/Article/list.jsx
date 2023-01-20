import { useEffect, useState } from "react"
import { fetchArticles, fetchUsers } from "../../utils/api"
import { Loading } from "../loading"
import { ArticleCard } from "./card/card"
import { Error } from "../error"
import { useLocation, } from "react-router-dom"

export const ArticleList = () => {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const { pathname } = useLocation()
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        fetchArticles()
            .then(articles => {
                setArticles(articles)
                setLoading(false)
            })
     }, [])

    if (loading) return (<Loading />)

       if (error) return (<Error error={error} />)

    return (articles
        .map(article => (<ArticleCard key={article.article_id} article={article} />)))
}