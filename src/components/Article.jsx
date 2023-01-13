import moment from "moment";
import { formatCommentCount } from "../utils/display";

export const Article = ({ article: { title, topic, author, body, comment_count, created_at }, authorName }) => (
    <div className="Article">
        <div className="article-title">{title}</div>
        <div className="article-meta">
            <div className="article-author">{`Published by ${authorName}`}</div>
            <div className="article-topic">{topic}</div>
        </div>
        <div className="article-body">{body}</div>
        <div className="article-meta">
            <div className="article-created_at">{moment(created_at).format('D/M/YYYY')}</div>
            <div className="article-comment_count">{formatCommentCount(comment_count)}</div>
        </div>
    </div>
)
