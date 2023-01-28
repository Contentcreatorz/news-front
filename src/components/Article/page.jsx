import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    deleteCommentsByArticleId,
    fetchArticleById,
    fetchCommentsByArticleId,
    fetchUsers,
    patchVotesByArticleId,
    postMessageToArticle
} from "../../utils/api"
import { Loading } from "../Transition/loading"
import { CommentsList } from "./comments/comments"
import { Article } from "./singleArticle/article"
import { Error } from "../Transition/error"
import { SubmitComment } from "./comments/submitComment"
import { Sending } from "../Transition/sending"

export const ArticlePage = ({ username }) => {
    const { id } = useParams()
    
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [commentLoading, setCommentLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    const [error, setError] = useState(null)
    const [commentError, setCommentError] = useState(null)
    const [deleting, setDeleting] = useState(0)

    function handleSubmit(event) {
        event.preventDefault()
        setCommentLoading(true)
        const { target: [{ value }] } = event
        postMessageToArticle(id, { username, body: value })
        .then(() => {
            setCommentLoading(false)
        })
        .catch(error => {
            setCommentLoading(false)
            setCommentError(error?.message)
                console.log('error :>> ', error)
            })
    }

    function handleDelete (comment_id) {
        setDeleting(comment_id)
        deleteCommentsByArticleId(comment_id)
            .then(() => {
                setDeleting(0)
            })
            .catch(error => {
                setDeleting(0)
                setError(error?.message)
            })
    }
    
    function handleUpVote() {
        setVotes(votes + 1)
        patchVotesByArticleId(id, { inc_votes: +1 })
            .catch(error => {
                setError(error?.message)
            })
    }

    function handleDownVote() {
        setVotes(votes - 1)
        patchVotesByArticleId(id, { inc_votes: -1 })
            .catch(error => {
                setError(error?.message)
            })
    }

    useEffect(() => {
        fetchCommentsByArticleId(id)
            .then((comments) => {
                setComments(comments)
            })
            .catch(error => {
                setError(error?.message)
            })
    }, [commentLoading,deleting])
    
    useEffect(() => {
        Promise.all([fetchArticleById(id), fetchCommentsByArticleId(id), fetchUsers()])
            .then(([article, comments, users]) => {
                const { author } = article;
                article.authorName = users?.find(({ username }) => username === author)?.name
                setArticle(article)
                setComments(comments)
                setVotes(article.votes)
                setLoading(false)
            })
    }, [id])

    if (loading) return <Loading />

    if (error) return (<Error error={error} />)

    return (
        <div className="page">
            <Article
                article={article}
                handleUpVote={handleUpVote}
                handleDownVote={handleDownVote}
                votes={votes}
            />           

            {commentLoading
                ? <Sending />
                : commentError
                    ? <Error error={commentError} />
                    : <SubmitComment handleSubmit={handleSubmit}  />}
                    
              <CommentsList comments={comments} deleting={deleting} username={username} onDelete={handleDelete} />}
        </div>
            
    )
}