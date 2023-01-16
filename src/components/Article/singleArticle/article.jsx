import moment from "moment";
import './style.css'

export const Article = ({
    article: { title, topic, authorName, body, votes, created_at }
}) => (
    <article className="Article">
        <div className="article-topic" itemProp="articleSection">
            {topic}
        </div>
        <header>
            <h1 className="article-title" itemProp="headline">{title}</h1>
            <div className="article-author" itemProp="author">
                {`Published by ${authorName} on ${moment(created_at).format('MMMM D, YYYY')}`}
            </div>
        </header>
        <div className="article-body" itemProp="articleBody">
            {body}
        </div>
        <span className="votes-total">{`Total Votes 🗳: ${votes}`} </span>
        <footer className="article-meta">
            <span className="votes-up">Vote ✔</span>
            <span className="votes-down">Vote ✖</span>
            {/* <div className="article-comment_count" itemProp="commentCount">
                {formatCommentCount(comment_count)}
            </div> */}
        </footer>
    </article>)