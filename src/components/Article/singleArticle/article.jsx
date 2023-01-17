import moment from "moment";
import './style.css'

export const Article = ({
    article: { title, topic, authorName, body, created_at },
    handleUpVote,
    handleDownVote,
    votes
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
            <span className="votes-up" onClick={handleUpVote}>Vote ✔</span>
            <span className="votes-down" onClick={handleDownVote} >Vote ✖</span>
        </footer>
    </article>
)