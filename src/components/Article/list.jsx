import { useEffect, useState } from 'react'
import { fetchArticlesByQuery, fetchArticlesByTopic } from '../../utils/api'
import { Loading } from '../Transition/loading'
import { ArticleCard } from './card/card'
import { Error } from '../Transition/error'
import { useLocation } from 'react-router-dom'

export const ArticleList = () => {
	const [loading, setLoading] = useState(true)
	const [articles, setArticles] = useState([])
	const [error, setError] = useState(null)
	const [search, setSearch] = useState('')

	const { pathname } = useLocation()

	const handleChange = e => {
		e.preventDefault()
		const {
			target: { value },
		} = e
		setSearch(value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		
		const sortBy = e.target.sort_by.value
		const order = e.target.order.value 	

		fetchArticlesByQuery(search, sortBy, order)
			.then(({articles}) => {
				setArticles(articles)
				setLoading(false)
			})
			.catch(error => {
				setError(error)	
				setLoading(false)	
			})
	}

	useEffect(() => {
		setLoading(true)
		fetchArticlesByTopic(pathname.replace(/.*\/(.*)/,'$1')).then(articles => {
			setArticles(articles)
			setLoading(false)
		})
	}, [pathname])

	if (loading) return <Loading />

	if (error) return <Error error={error} />

	return (
		<div className="spacer">
			<div className="container">
				<div className="cards">
					{articles.map(article => (
						<ArticleCard key={article.article_id} article={article} />
					))}
				</div>
				<div className="filtering">
					<div className="titles">
						<h3>Filters</h3>
					</div>
					<form className="sorting" onSubmit={handleSubmit}>
						<div className="search-container">
							<input
								type="text"
								name="search"
								className="search"
								placeholder={`🔍 Search for Article`}
								onChange={handleChange}
							/>

							<button type="submit" className="search-button">
								Search
							</button>
						</div>

						<div className="archordion">
							<hr />
							<div className="dropdown">
								<h3>Sort by:</h3>
								<select className="sorter" name="sort_by" id="sort_by">
									<option value="created_at">Date</option>
									<option value="comment_count">Comments</option>
									<option value="votes">Votes</option>
								</select>
							</div>
							<hr />
							<div className="order">
								<h3>Order:</h3>
								<select className="sorter" name="order" id="order">
									<option value="desc">Descending</option>
									<option value="asc">Ascending</option>
								</select>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
