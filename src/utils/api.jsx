export const fetchImage = (username) =>
    fetch(`https://nc-be-project-news.onrender.com/api/users`)
        .then(response => response.json())
        .then(({ users }) => users.find(user => user.username === username).avatar_url)

export const fetchArticles = () =>
    fetch(`https://nc-be-project-news.onrender.com/api/articles`)
        .then(response => response.json())
        .then(({ articles }) => articles)

export const fetchUsers = () =>
    fetch(`https://nc-be-project-news.onrender.com/api/users`)
        .then(response => response.json())
        .then(({ users }) => users)

export const fetchArticleById = (id) => {
    return fetch(`https://nc-be-project-news.onrender.com/api/articles/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        }).then(({ article }) => {
            return article
        }).catch(error => console.log(error))
}

export const counter = (label, value) => {
    return `${value} ${label}${value === 1 ? '' : 's'}`
}