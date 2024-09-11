import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context';

const Stats = () => {
    const { user, stats, changeFollowers, changeFollowing } = useContext(TwitterContext);
    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div onClick={() => changeFollowers(true)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeFollowers(false);
                    }}
                >
                    Followers: {stats.followers}
                </div>
                <div onClick={() => changeFollowing(true)}
                    onContextMenu={e => {
                        e.preventDefault();
                        changeFollowing(false);
                    }}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    )
}

export default Stats