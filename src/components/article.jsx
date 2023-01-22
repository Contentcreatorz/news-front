import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./Article/list";
import { ArticlePage } from "./Article/page";

export const Main = ({ users, username }) => {

    return (
        <Routes>
            <Route path="/" element={<ArticleList users={users} />} />
            <Route path={`/articles/:id`} element={<ArticlePage users={users} username={username} />} />
            <Route path={`/articles/coding`} element={<ArticleList users={users} />} />
            <Route path={`/articles/cooking`} element={<ArticleList users={users} />} />
            <Route path={`/articles/football`} element={<ArticleList users={users} />} />
        </Routes>
    )
}