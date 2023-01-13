import { useEffect, useState } from 'react';
import { fetchImage } from '../utils/api';

export const UserImage = ({ username }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchImage(username).then(imageUrl => {
            setImageUrl(imageUrl)
            setLoading(false)
        });
    }, [username]);

    return (<div className="userImageMask">
        <div className="userContainer">
            {loading ? <div>Loading...</div> : <img src={imageUrl} className="userImage" alt={`profile-picture`} />}
        </div>
    </div >);
};
