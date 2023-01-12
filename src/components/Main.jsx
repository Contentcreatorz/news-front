import { Route, Routes, useLocation } from "react-router-dom";
import { ArticleList } from "./ArticleList";
import { SingleArticle } from "./SingleArticle";

export const Main = ({ username }) => {

    const { pathname } = useLocation()

    return (
        <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path={`/articles/:id`} element={<SingleArticle />} />
        </Routes>


    )
}