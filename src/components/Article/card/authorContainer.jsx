import './style.css'
import { MaskedImage } from '../../userImage/imagePage'
import { useEffect, useState } from 'react'
import { fetchUsers } from '../../../utils/api'
import { Loading } from '../../loading'

export const AuthorContainer = ({ article: { author } }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetchUsers()
            .then((users) => {
                setUsers(users)
                setLoading(false)
            })
    }, [])

    if (loading) return <Loading />
    
    return (<div className="author-container">
        <MaskedImage pictureSrc={
            users?.find(user => user.username === author)?.avatar_url
        } className="userImage" alt={`${author}-profile picture`} />
        <span className="author" itemProp="author">{`${
            users?.find(user => user.username === author)?.name
        }`}</span>
    </div>)
}