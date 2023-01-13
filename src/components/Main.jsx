import { Route, Routes, useLocation } from "react-router-dom";
import { ArticleList } from "./ArticleList";
import { ArticlePage } from "./ArticlePage";

export const Main = ({ username }) => {

    return (
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path={`/articles/:id`} element={<ArticlePage />} />
        </Routes>


    )
}