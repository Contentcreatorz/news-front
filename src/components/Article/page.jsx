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

    const handleUpVote = () => {
        setVotes(votes + 1)
        patchVotesByArticleId(id, { inc_votes: 1 })
    }

    const handleDownVote = () => {
        setVotes(votes - 1)
        patchVotesByArticleId(id, { inc_votes: -1 })
    }

    useEffect(() => {
        Promise.all([fetchArticleById(id), fetchCommentsByArticleId(id)])
            .then(([article, comments]) => {
                article.authorName = users.find((user) => user.username === article.author).name
                setArticle(article)
                setComments(comments)
                setVotes(article.votes)
                console.log('votes :>> ', votes);
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loading />

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