export const MaskedImage = ({ pictureSrc, username }) => {
    
    return (
        <div className="userImageMask">
        <div className="userContainer">
            {<img src={pictureSrc} className="userImage" alt={username} />}
        </div>
    </div >
    )
}
