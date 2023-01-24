import { useState, useEffect } from 'react'
import './style.css'
import { TopicPage } from './topic/topic'
import { useLocation } from 'react-router-dom'

export const Topic = () => {
	const { pathname } = useLocation()
	const [activeTopic, setActiveTopic] = useState('')

	useEffect(() => {
		setActiveTopic(pathname.match(/coding|cooking|football/))
	}, [pathname])

	return <TopicPage setActiveTopic={setActiveTopic} />
}
