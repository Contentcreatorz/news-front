import './ArticleCard.css'
import moment from "moment/moment"
import { Link } from "react-router-dom"
import { UserImage } from "./UserImage"
import { formatCommentCount, formatVoteCount } from '../utils/display'

export const ArticleCard = ({ article: { article_id, votes, comment_count, author, created_at, topic, title }, authorNameReference }) => (
    <div className="article-card">
        <div className="card-header">
            <div className="card-title">{title}</div>
            <div className="card-votes">{`${formatVoteCount(votes)}`}</div>
        </div>
        <div className="card-mid">
            <div className="author-container">
                <UserImage username={author} className="card-picture" />
                <div className="author">{authorNameReference[article_id]}</div>
            </div>
        </div>
        <div className='button-container'>
            <Link to={`/articles/${article_id}`}>
                <button className="read-article-button">Read Article</button>
            </Link>
        </div>
        <div className="card-footer">
            <div className="card-left">
                <div className="created-at">{moment.utc(created_at).format('M/D/YYYY')}</div>
                <div>{`${formatCommentCount(comment_count)}`}</div>
            </div>
            <div>{topic}</div>
        </div>
    </div>)