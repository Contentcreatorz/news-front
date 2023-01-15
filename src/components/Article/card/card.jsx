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
} }) => (<Link to={`/articles/${article_id}`} style={{ textDecoration: "none" }}>
    <article className="article-card">
        <div className="card-mid">
            <div className="author-container">
                <UserImage username={author} className="userImage" alt={authorName} />
                <div className="author" itemProp="author">{`${authorName}`}</div>
            </div>
            <div className="card-votes" itemProp="upvoteCount">{`❤ ${formatVoteCount(votes)}`}</div>
        </div>
        <header className="card-header">
            <h1 className="card-title" itemProp="headline">{title}</h1>
        </header>
        <footer className="card-footer">
            <div className="card-left">
                <div itemProp="commentCount">{`💬 ${formatCommentCount(comment_count)}`}</div>
                <div className='separator'>•</div>
                <time className="created-at" itemProp="datePublished" dateTime={created_at}>{`📆 ${moment.utc(created_at).format('M/D/YYYY')}`}</time>
            </div>
            <div itemProp="articleSection">{topic}</div>
        </footer>
    </article>
</Link>)