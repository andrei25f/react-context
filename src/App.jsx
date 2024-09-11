import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'

function App() {
  const [user, setUser] = useState({
    name: 'User',
    avatar: 'https://gravatar.com/avatar/000?d=mp'
  });

  const [stats, setStats] = useState({
    followers: 10,
    following: 100
  })

  const changeAvatar = url => {
    setUser(prevState => ({...prevState, avatar: url ?? prevState.avatar}));
  }

  return (
    <div className='app'>
      <Navigation user={user} changeAvatar={changeAvatar}/>
      <Body user={user} stats={stats} changeAvatar={changeAvatar}/>
    </div>
  )
}

export default App
