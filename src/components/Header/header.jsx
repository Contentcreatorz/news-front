import { UserImage } from "../userImage"
import { Link } from "react-router-dom"
import { Topic } from "./topic"
import "./style.css"

export const Header = ({ username, setSelectedCategory, users }) => {

    return (
        <header className="App-header">
            <div className="header-content">
                <UserImage users={users} username={username} />
                <Topic setSelectedCategory={setSelectedCategory} />
                <Link to="/" className="header-link">
                    NC News
                </Link>
            </div>
        </header>
    )

}