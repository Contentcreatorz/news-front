import { Route, Routes, useLocation } from "react-router-dom";
import { ArticleList } from "./Article/list";
import { ArticlePage } from "./Article/page";

export const Main = ({ users }) => {

    return (
        <Routes>
            <Route path="/" element={<ArticleList users={users} />} />
            <Route path={`/articles/:id`} element={<ArticlePage users={users} />} />
        </Routes>
    )
}