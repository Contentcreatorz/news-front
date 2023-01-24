import './style.css'
import moment from "moment/moment"
import { Link } from "react-router-dom"
import { UserImage } from '../../userImage'
import { formatCommentCount, formatVoteCount } from '../../../utils/display'
import { AuthorContainer } from './authorContainer'

export const ArticleCard = ({ article, article: {
    comment_count,
    article_id,
    created_at,
    topic,
    votes,
    title
}}) => (
    <div className="containCard">
    <article role="article" className="article-card">
        <div className="card-author-info">
            <AuthorContainer article={article} />
            <div className="card-votes" itemProp="upvoteCount">{`❤ ${formatVoteCount(votes)}`}</div>
        </div>
        <Link to={`/articles/${article_id}`} rel="noopener noreferrer" className="card-link">
            <header className="card-header">
                <h2 className="card-title" itemProp="headline">{title}</h2>
            </header>
        </Link>
        <footer className="card-footer">
            <div className="card-left">
                <span itemProp="commentCount">{`💬 ${formatCommentCount(comment_count)}`}</span>
                <div className='separator'>•</div>
                <span className="created-at" itemProp="datePublished" dateTime={created_at}>
                    {`📆 ${moment.utc(created_at).format('M/D/YYYY')}`}
                </span>
            </div>
            <span itemProp="articleSection">{topic}</span>
        </footer>
    </article>
    </div>
)

