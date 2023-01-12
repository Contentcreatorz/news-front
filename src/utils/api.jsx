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

