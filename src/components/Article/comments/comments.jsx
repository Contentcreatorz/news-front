import moment from "moment/moment";
import './style.css'


export const CommentsList = ({ comments: { comments } }) => (

    < section className="comments-section" >
        <h1 className="section-title">Comments</h1>

        {
            comments.map(({ comment_id, created_at, author, votes, body }) => (
                <article className="comment-wrap" id={`comment-${comment_id}`}>
                    <header className="comment-content">
                        <div className="comment-author-wrap">
                            <h2 className="comment-author">{author}</h2>
                            <time className="comment-time" dateTime={created_at}>
                                {moment(created_at).format('D/M/YYYY')}
                            </time>
                        </div>
                        <div className="comment-body">
                            <p>{body}</p>
                        </div>
                    </header>
                    <footer className="comment-actions">
                        <div className="comment-delete">
                            Delete ❌
                        </div>
                        <div className="votes-container">
                            <span className="votes">Votes: {votes}</span>
                        </div>
                    </footer>
                </article>
            ))
        }
    </section >
)    