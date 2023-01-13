import './headerStyle.css';
import { Link } from "react-router-dom";
import { Topic } from "./topic";
import { UserImage } from '../userImage';

export const Header = ({ username, setSelectedCategory }) => {



    return (<header className="App-header">
        <div className='header-content'>
            <UserImage username={username} />
            <Topic setSelectedCategory={setSelectedCategory} />
            <Link to="/" className="header-link">NC News</Link>
        </div>
    </header>)

}