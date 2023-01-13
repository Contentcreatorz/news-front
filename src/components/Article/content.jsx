import moment from "moment";
import { formatCommentCount } from "../../utils/display";
import './contentStyle.css'

export const Article = ({ article: { title, topic, author, body, comment_count, created_at }, authorName }) => (
    <article className="Article">
        <header>
            <h1 className="article-title" itemprop="headline">{title}</h1>
            <div className="article-meta">
                <div className="article-author" itemprop="author">{`Published by ${authorName}`}</div>
                <div className="article-topic" itemprop="articleSection">{topic}</div>
            </div>
        </header>
        <div className="article-body" itemprop="articleBody">{body}</div>
        <footer className="article-meta">
            <div className="article-created_at" itemprop="datePublished" datetime={created_at}>{moment(created_at).format('D/M/YYYY')}</div>
            <div className="article-comment_count" itemprop="commentCount">{formatCommentCount(comment_count)}</div>
        </footer>
    </article>
)
