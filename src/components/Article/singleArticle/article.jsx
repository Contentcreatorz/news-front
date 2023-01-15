import moment from "moment";
import { formatCommentCount } from "../../../utils/display";
import './style.css'

export const Article = ({
    article: { title, topic, authorName, body, comment_count, created_at }
}) => (
    <article className="Article">
        <header>
            <h1 className="article-title" itemProp="headline">{title}</h1>
            <div className="article-meta">
                <div className="article-author" itemProp="author">
                    {`Published by ${authorName}`}
                </div>
                <div className="article-topic" itemProp="articleSection">
                    {topic}
                </div>
            </div>
        </header>
        <div className="article-body" itemProp="articleBody">
            {body}
        </div>
        <footer className="article-meta">
            <div className="article-created_at" itemProp="datePublished" dateTime={created_at}>
                {moment(created_at).format('D/M/YYYY')}
            </div>
            <div className="article-comment_count" itemProp="commentCount">
                {formatCommentCount(comment_count)}
            </div>
        </footer>
    </article>)