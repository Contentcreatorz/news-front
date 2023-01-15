export const formatCommentCount = ammount => `${ammount} comment${ammount === 1 ? '' : 's'}`

export const formatVoteCount = ammount => `${ammount} vote${ammount === 1 ? '' : 's'}`

export const createAndAssignAuthorReference = (articles, users) => {
    // Input validation
    if (!Array.isArray(articles) || !Array.isArray(users)) {
        throw new Error("Invalid input: both articles and users must be arrays");
    }
    if (!articles.every(({ article_id, author }) => typeof article_id === 'number' && typeof author === 'string')) {
        throw new Error("Invalid input: articles must contain article_id (number) and author (string) properties");
    }
    if (!users.every(({ username, name }) => typeof username === 'string' && typeof name === 'string')) {
        throw new Error("Invalid input: users must contain username (string) and name (string) properties");
    }
    // Create the reference object
    articles.forEach(article => {
        const author = users.find(({ username }) => username === article.author)
        article.authorName = author.name
    });
    return articles;
}
