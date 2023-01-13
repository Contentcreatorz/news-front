import './cardStyle.css'
import moment from "moment/moment"
import { Link } from "react-router-dom"
import { formatCommentCount, formatVoteCount } from '../../utils/display'
import { UserImage } from '../userImage'

export const ArticleCard = ({ article: { article_id, votes, comment_count, author, created_at, topic, title }, authorNameReference }) => (
    <article className="article-card">
        <header className="card-header">
            <h1 className="card-title" itemprop="headline">{title}</h1>
            <div className="card-votes" itemprop="upvoteCount">{`❤ ${formatVoteCount(votes)}`}</div>
        </header>
        <div className="card-mid">
            <div className="author-container">
                <UserImage username={author} className="card-picture" alt={authorNameReference[article_id]} />
                <div className="author" itemprop="author">{`${authorNameReference[article_id]} 🖋`}</div>
            </div>
        </div>
        <div className='button-container'>
            <Link to={`/articles/${article_id}`}>
                <button className="read-article-button" itemprop="mainEntityOfPage">Read Article</button>
            </Link>
        </div>
        <footer className="card-footer">
            <div className="card-left">

                <time className="created-at" itemprop="datePublished" datetime={created_at}>{`📆 ${moment.utc(created_at).format('M/D/YYYY')}`}</time>
                <div className='separator'>•</div>
                <div itemprop="commentCount">{`💬 ${formatCommentCount(comment_count)}`}</div>
            </div>
            <div itemprop="articleSection">{topic}</div>
        </footer>
    </article>)