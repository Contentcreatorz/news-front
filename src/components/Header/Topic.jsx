import { Link } from 'react-router-dom';
import './Header.css';

export const Topic = ({ setSelectedCategory }) => {
    return (
        <div className="topic-container">
            <div className="topic-content">
                <Link to={`/coding`} className="topic-link" onClick={() => setSelectedCategory('coding')}>Coding</Link>
                <div className="topic-divider"></div>
                <Link to={`/cooking`} className="topic-link" onClick={() => setSelectedCategory('cooking')}>Cooking</Link>
                <div className="topic-divider"></div>
                <Link to={`/football`} className="topic-link" onClick={() => setSelectedCategory('football')}>Football</Link>
            </div>
        </div>
    )
}