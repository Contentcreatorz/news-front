import moment from "moment/moment"
import { Link } from "react-router-dom"
import { UserImage } from "./UserImage"

export const ArticleCard = ({
    article: { article_id, votes, comment_count, author, created_at, topic, title },
    authorName
}) => (<div className="article-card">
    <div className="card-header">
        <div className="author-container">
            <UserImage username={author} className="picture" />
            <div className="author">{authorName[article_id]}</div>
        </div>
        <div className="votes">{`${votes} vote${votes === 1 ? '' : 's'}`}</div>
    </div>
    <div className="card-title">{title}</div>
    <Link to={`/articles/${article_id}`}>
        <button className="read-article-button">Read Article</button>
    </Link>
    <div className="card-footer">
        <div className="created-at">{moment(created_at).format('M/D/YYYY')}</div>
        <div>{`${comment_count} comment${comment_count === 1 ? '' : 's'}`}</div>
        <div>{topic}</div>
    </div>
</div>)