import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchCommentsByArticleId, patchVotesByArticleId } from "../../utils/api"
import { Loading } from "../loading"
import { CommentsList } from "./comments/comments"
import { Article } from "./singleArticle/article"

export const ArticlePage = ({ users }) => {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    const [error, setError] = useState(null);

    const handleUpVote = () => {
        setVotes(votes + 1)
        patchVotesByArticleId(id, { inc_votes: -1 })
            .catch(error => {
                setError(error.message)
            });
    }

    const handleDownVote = () => {
        setVotes(votes - 1)
        patchVotesByArticleId(id, { inc_votes: -1 })
            .catch(error => {
                setError(error.message)
            });
    }

    useEffect(() => {
        Promise.all([fetchArticleById(id), fetchCommentsByArticleId(id)])
            .then(([article, comments]) => {
                article.authorName = users.find((user) => user.username === article.author).name
                setArticle(article)
                setComments(comments)
                setVotes(article.votes)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loading />

    if (error) return (<p>Error! {error} </p>)

    return (
        <>
            <Article
                article={article}
                handleUpVote={handleUpVote}
                handleDownVote={handleDownVote}
                votes={votes}
            />
            <CommentsList comments={comments} />
        </>
    )
}