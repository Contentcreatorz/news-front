import axios from "axios";


export const fetchImage = (username) =>
    fetch(`https://nc-be-project-news.onrender.com/api/users`)
        .then(response => response.json())
        .then(({ users }) => users.find(user => user.username === username).avatar_url)
        .catch(error => console.log(error))

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

export const fetchCommentsByArticleId = (id) => {
    return fetch(`https://nc-be-project-news.onrender.com/api/articles/${id}/comments`)
        .then(response => {
            return response.json()
        }).then((comments) => {
            return comments
        }).catch((error) => {
            console.log('error :>> ', error)
        })
}
export const patchVotesByArticleId = (id, votes) => {
    return axios.patch(`https://nc-be-project-news.onrender.com/api/articles/${id}`, votes)
        .then((response) => {
            console.log('response.data :>> ', response.data);
            return response.data
        })

}
