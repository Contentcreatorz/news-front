import { Link } from 'react-router-dom'
import './style.css'

export const TopicPage = ({setSelectedCategory}) => (
	<div className="topic-container">
		<div className="topic-content">
			<Link
				to={`/articles/coding`}
				className={`topic-link coding`}
			>
				Coding
			</Link>
			<div className="topic-divider" />
			<Link
				to={`/articles/cooking`}
				className={`topic-link cooking`}
			>
				Cooking
			</Link>
			<div className="topic-divider" />
			<Link
				to={`/articles/football`}
				className={`topic-link football`}
			>
				Football
            </Link>          

		</div>
	</div>
)
