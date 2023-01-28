import { Link } from 'react-router-dom'
import './style.css'

export const TopicPage = ({setActiveTopic}) => (
	<div className="topic-container">
		<div className="topic-content">
			<Link
				to={`/articles/coding`}
				className={`topic-link coding`}
				onClick={() => setActiveTopic('coding')}
			>
				Coding
			</Link>
			<div className="topic-divider" />
			<Link
				to={`/articles/cooking`}
				className={`topic-link cooking`}
				onClick={() => setActiveTopic('cooking')}
			>
				Cooking
			</Link>
			<div className="topic-divider" />
			<Link
				to={`/articles/football`}
				className={`topic-link football`}
				onClick={() => setActiveTopic('football')}
			>
				Football
            </Link>          

		</div>
	</div>
)
