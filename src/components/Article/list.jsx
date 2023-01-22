import { useEffect, useState } from "react"
import { fetchArticles, fetchArticlesByTopic, fetchUsers } from "../../utils/api"
import { Loading } from "../Transition/loading"
import { ArticleCard } from "./card/card"
import { Error } from "../Transition/error"
import { useLocation, useSearchParams, } from "react-router-dom"

export const ArticleList = () => {
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const { pathname } = useLocation()
    const [error, setError] = useState(null)
    
    const topic = pathname.match(/coding|cooking|football/)?.[0]

    useEffect(() => {
        setLoading(true)
        Promise.all([fetchArticles(), fetchArticlesByTopic(topic)])
            .then(([articles, articlesByTopic]) => {
                if (topic) {
                    setArticles(articlesByTopic)
                } else {
                    setArticles(articles)
                }
                setLoading(false)
            })
     }, [pathname])

    if (loading) return (<Loading />)

       if (error) return (<Error error={error} />)

    return (articles
        .map(article => (<ArticleCard key={article.article_id} article={article} />)))
}