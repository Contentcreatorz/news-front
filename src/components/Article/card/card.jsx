import './style.css'
import moment from "moment/moment"
import { Link } from "react-router-dom"
import { formatCommentCount, formatVoteCount } from '../../../utils/display'
import { UserImage } from '../../userImage'

export const ArticleCard = ({ article: {
    comment_count,
    authorName,
    article_id,
    created_at,
    author,
    topic,
    votes,
    title
} }) => (<Link to={`/articles/${article_id}`} rel="noopener noreferrer" style={{ textDecoration: "none" }}>
    <article role="article" className="article-card">
        <div className="card-author-info">
            <div className="author-container">
                <UserImage username={author} className="userImage" alt={authorName} />
                <span className="author" itemProp="author">{`${authorName}`}</span>
            </div>
            <div className="card-votes" itemProp="upvoteCount">{`❤ ${formatVoteCount(votes)}`}</div>
        </div>
        <header className="card-header">
            <h2 className="card-title" itemProp="headline">{title}</h2>
        </header>
        <footer className="card-footer">
            <div className="card-left">
                <span itemProp="commentCount">{`💬 ${formatCommentCount(comment_count)}`}</span>
                <div className='separator'>•</div>
                <span className="created-at" itemProp="datePublished" dateTime={created_at}>{`📆 ${moment.utc(created_at).format('M/D/YYYY')}`}</span>
            </div>
            <span itemProp="articleSection">{topic}</span>
        </footer>
    </article>
</Link>
)

