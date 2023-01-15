import moment from "moment/moment";
import './style.css'

export const CommentsList = ({ comments: { comments } }) => (


    <section className="comments-section">
        <hr className="comments-section__divider" />
        {comments.map(({ comment_id, created_at, author, votes, body }) => (
            <article key={comment_id} className="comments-section__comment-container">
                <header className="comments-section__header">
                    <span className="comments-section__date">{moment(created_at).format('D/M/YYYY')}</span>
                    <h2 className="comments-section__author">{author}</h2>
                </header>
                <div className="comments-section__votes-container">
                    <span className="comments-section__votes">Votes: {votes}</span>
                </div>
                <p className="comments-section__body">{body}</p>
                <hr className="comments-section__divider" />
            </article>
        ))}
    </section>
)    