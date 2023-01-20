import { Link } from 'react-router-dom'
import './style.css'

export const Topic = () => (
    <div className="topic-container">
    <div className="topic-content">
        <Link to={`/articles?coding`} className="topic-link">Coding</Link>
        <div className='topic-divider' />
        <Link to={`/articles?cooking`} className="topic-link">Cooking</Link>
        <div className='topic-divider' />
        <Link to={`/articles?football`} className="topic-link">Football</Link>
    </div>
    </div>
)