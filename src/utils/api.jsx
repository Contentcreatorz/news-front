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