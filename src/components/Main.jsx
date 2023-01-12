import { useContext } from "react";
import { ArticleCard } from "./ArticleCard"
import './ArticleCard.css'
import { ArticleList } from "./ArticleList";
import { SearchBar } from "./Filter/SearchBar"

export const Main = ({ username }) => {

    // const selectedCategory = useContext(SelectedCategoryContext)

    return (
        <ArticleList />
        // <SearchBar />
    )
}