import moment from "moment/moment"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { counter, fetchArticleById, fetchUsers } from "../utils/api"

export const SingleArticle = () => {

    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])
    const [authorName, setAuthorName] = useState('')
    useEffect(() => {
        Promise.all([fetchArticleById(id), fetchUsers()])
            .then(([article, users]) => {
                setArticle(article)
                setUsers(users)
                setAuthorName(users.find(({ username }) => username === article.author).name)
                setLoading(false)
            })
    }, [id])

    if (loading) return (<div>Loading...</div>)

    return (
        <div>{Object.entries(article).reduce((tag, [prop, content]) => {

            tag.push((<div key={prop} className={prop}  >{({
                title: content,
                author: `by ${authorName}`,
                body: content,
                comment_count: counter(prop, content),
                created_at: moment(content).format('D/M/YYYY'),
                topic: content,
            }[prop])}</div>))

            return tag
        }, [])}</div>
    )
}