import './style.css'

export const SubmitComment = ({ handleSubmit }) => (
		<form className="message-container" onSubmit={handleSubmit}>
			<textarea
				className="message"
				placeholder="Write your comment here..."
				rows="3"
				required
			></textarea>
			<button className="sub-button" type="submit">
				Send comment
			</button>
        </form>
)
