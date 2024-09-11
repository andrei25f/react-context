import React from 'react'
import Avatar from './Avatar'

const Navigation = ({user, changeAvatar}) => {
  return (
    <div className='nav'>
        <Avatar user={user} size='small' changeAvatar={changeAvatar}/>
    </div>
  )
}

export default Navigation