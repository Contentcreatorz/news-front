import { Route, Routes, useLocation } from "react-router-dom";
import { ArticleList } from "./Article/list";
import { ArticlePage } from "./Article/page";

export const Main = ({ username }) => {

    return (
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path={`/articles/:id`} element={<ArticlePage />} />
        </Routes>
    )
}