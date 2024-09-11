import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'

const Body = ({user, stats, changeAvatar}) => {
  return (
    <div className='body'>
        <Sidebar user={user} stats={stats} changeAvatar={changeAvatar}/>
        <Content/>
    </div>
  )
}

export default Body