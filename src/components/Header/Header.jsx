import { UserImage } from "../UserImage"
import './Header.css';
import { Link } from "react-router-dom";
import { Topic } from "./Topic";
import { useContext, useState } from "react";

export const Header = ({ username, setSelectedCategory }) => {



    return (<header className="App-header">
        <div className='header-content'>
            <UserImage username={username} />
            <Topic setSelectedCategory={setSelectedCategory} />
            <Link to="/" className="header-link">NC News</Link>
        </div>
    </header>)

}