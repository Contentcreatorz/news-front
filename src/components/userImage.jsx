import { useEffect, useState } from 'react'
import { fetchUsers } from '../utils/api'
import { Loading } from './Transition/loading'
import { MaskedImage } from './userImage/imagePage'

export const UserImage = ({ username  }) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [picture, setPicture] = useState('')
    
    useEffect(() => {
        setLoading(true); 
        fetchUsers()
        .then((users) => {
            setUsers(users)
            setPicture(users.find(user => user.username === username).avatar_url)
            setLoading(false); 
        })
    }, [])
    
    if (loading) return <Loading />

    return <MaskedImage pictureSrc={picture} username={username} />
}
