import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    fetchArticleById,
    fetchCommentsByArticleId,
    fetchUsers,
    patchVotesByArticleId,
    postMessageToArticle
} from "../../utils/api"
import { Loading } from "../loading"
import { CommentsList } from "./comments/comments"
import { Article } from "./singleArticle/article"
import { Error } from "../error"
import { SubmitComment } from "./comments/submitComment"

export const ArticlePage = ({ username }) => {
    const { id } = useParams()
    
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [commentLoading, setCommentLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [votes, setVotes] = useState(0)
    const [error, setError] = useState(null)
    const [commentError, setCommentError] = useState(null)

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

    const handleUpVote = () => {
        setVotes(votes + 1)
        patchVotesByArticleId(id, { inc_votes: + 1 })
            .catch(error => {
                setError(error?.message)
            });
    }

    const handleDownVote = () => {
        setVotes(votes - 1)
        patchVotesByArticleId(id, { inc_votes: -1 })
            .catch(error => {
                setError(error?.message)
            });
    }

    useEffect(() => {
        fetchCommentsByArticleId(id)
            .then((comments) => {
                setComments(comments)
            })
            .catch(error => {
                setError(error?.message)
            })
    }, [commentLoading])
    
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
        <>
            <Article
                article={article}
                handleUpVote={handleUpVote}
                handleDownVote={handleDownVote}
                votes={votes}
            />
            
            <CommentsList comments={comments} />
            
            {commentLoading
                ? <Loading />
                : commentError
                    ? <Error error={commentError} />
                    : <SubmitComment handleSubmit={handleSubmit} />}
        </>
    )
}