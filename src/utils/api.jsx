import axios from "axios";

export const fetchArticles = () =>
    fetch(`https://nc-be-project-news.onrender.com/api/articles`)
        .then(response => response.json())
        .then(({ articles }) => articles)
        .catch(error => console.log(error))

export const fetchUsers = () =>
    fetch(`https://nc-be-project-news.onrender.com/api/users`)
        .then(response => response.json())
        .then(({ users }) => users)
        .catch(error => console.log(error))

export const fetchArticleById = (id) =>
    fetch(`https://nc-be-project-news.onrender.com/api/articles/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        }).then(({ article }) => article).catch(error => console.log(error))

export const fetchArticlesByTopic = (topic) =>
    fetch(`https://nc-be-project-news.onrender.com/api/articles?topic=${topic}`)
        .then(response => response.json())
        .then(({ articles }) => articles)
        .catch(error => console.log(error))

export const fetchArticlesByTitle = (title) => {
    return fetch(`https://nc-be-project-news.onrender.com/api/articles?title=${title}`)
        .then(response => response.json())
        .then(({ articles }) => articles)
        .catch(error => console.log(error))
}

export const fetchCommentsByArticleId = (id) => {
    return fetch(`https://nc-be-project-news.onrender.com/api/articles/${id}/comments`)
        .then(response => response.json())
        .then(comments => comments)
        .catch(error => {
            console.log('error :>> ', error)
        })
}

export const patchVotesByArticleId = (id, votes) => {
    return axios.patch(`https://nc-be-project-news.onrender.com/api/articles/${id}`, votes)
        .then(response => response.data)
}

export const postMessageToArticle = (id, message) => {
    return axios.post(`https://nc-be-project-news.onrender.com/api/articles/${id}/comments`, message)
        .then(response => response.data)
}