import React from 'react'
import Stats from './Stats'

const Sidebar = ({user, stats, changeAvatar}) => {
  return (
    <div className='sidebar'>
        <Stats user={user} stats={stats} changeAvatar={changeAvatar}/>
    </div>
  )
}

export default Sidebar