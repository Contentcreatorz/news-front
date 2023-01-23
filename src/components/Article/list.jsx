import { useEffect, useState } from 'react'
import { fetchArticles, fetchArticlesByTopic, fetchUsers } from '../../utils/api'
import { Loading } from '../Transition/loading'
import { ArticleCard } from './card/card'
import { Error } from '../Transition/error'
import { useLocation, useSearchParams } from 'react-router-dom'

export const ArticleList = () => {
	const [loading, setLoading] = useState(true)
	const [articles, setArticles] = useState([])
	const { pathname } = useLocation()
	const [error, setError] = useState(null)

	const topic = pathname.match(/coding|cooking|football/)?.[0]

	const [searchBy, setSearchBy] = useState('')
	const [showInput, setShowInput] = useState(false)
	const [showSortBy, setShowSortBy] = useState(false)
	const [showOrder, setShowOrder] = useState(false)

	const handleSortByClick = (e) => {
        e.preventDefault()
		setShowSortBy(!showSortBy)
	}

	const handleOrderClick = (e) => {
        e.preventDefault()
		setShowOrder(!showOrder)
	}

	const handleChange = e => {
        e.preventDefault()
		setSearchBy(e.target.value)
		if (e.target.value === 'title' || e.target.value === 'author' || e.target.value === 'topic') {
			setShowInput(true)
		} else {
			setShowInput(false)
		}
	}

	useEffect(() => {
		setLoading(true)
		Promise.all([fetchArticles(), fetchArticlesByTopic(topic)]).then(
			([articles, articlesByTopic]) => {
				if (topic) {
					setArticles(articlesByTopic)
				} else {
					setArticles(articles)
				}
				setLoading(false)
			}
		)
	}, [pathname])

	if (loading) return <Loading />

	if (error) return <Error error={error} />

	return (
		<div className="list-container">
			<form className="sorting">
				<div className="titles">
					<h3>Filters</h3>
					<button>Load</button>
				</div>
				<div className="search">
					<select name="search_by" id="search_by" onChange={handleChange}>
						<option value="title">Title</option>
						<option value="author">Author</option>
						<option value="topic">Topic</option>
					</select>
					{showInput && (
						<input
							type="text"
							name="search"
							className="search"
							placeholder={`🔍 Search ${searchBy}`}
						/>
					)}
				</div>

				<div className="archordion">
					<hr />
					<div className="dropdown">
						<h3>Sort by:</h3>
						<button className="show-sortby-dropdown" onClick={handleSortByClick}>
							+
						</button>
						{showSortBy && (
							<select name="sort_by" id="sort_by">
								<option value="created_at">Date</option>
								<option value="comment_count">Comments</option>
								<option value="votes">Votes</option>
							</select>
						)}
					</div>
					<hr />
					<div className="order">
						<h3>Order:</h3>
						<button className="show-sortby-dropdown" onClick={handleOrderClick}>
							+
						</button>
						{showOrder && (
							<select name="order" id="order">
								<option value="desc">Descending</option>
								<option value="asc">Ascending</option>
							</select>
						)}
					</div>
                </div>
			</form>
                
			{articles.map(article => (
				<ArticleCard key={article.article_id} article={article} />
			))}
		</div>
	)
}
