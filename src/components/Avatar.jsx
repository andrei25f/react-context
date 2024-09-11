import React, { useContext } from 'react'
import { TwitterContext } from '../utils/context';

const Avatar = ({ size }) => {
    const {user, changeAvatar} = useContext(TwitterContext);
    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            onContextMenu={e => {
                e.preventDefault();
                const name = prompt('Enter new name');
                user.changeName(name);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar}
            alt={user.name}
        />
    )
}

export default Avatar