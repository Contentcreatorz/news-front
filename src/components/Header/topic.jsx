import { Link } from 'react-router-dom'
import './headerStyle.css'

export const Topic = () => (<div className="topic-container">
    <div className="topic-content">
        <Link to={`/coding`} className="topic-link">Coding</Link>
        <div className='topic-divider' />
        <Link to={`/cooking`} className="topic-link">Cooking</Link>
        <div className='topic-divider' />
        <Link to={`/football`} className="topic-link">Football</Link>
    </div>
</div>)