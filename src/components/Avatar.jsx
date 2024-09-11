import React from 'react'

const Avatar = ({ user, size, changeAvatar }) => {
    return (
        <img onClick={() => {
            const url = prompt('ENter new avatar url');
            changeAvatar(url);
        }}
            className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name} />
    )
}

export default Avatar