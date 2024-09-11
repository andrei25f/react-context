import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation'
import Body from './components/Body'
import { TwitterContext } from './utils/context'

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
    setUser(prevState => ({ ...prevState, avatar: url || prevState.avatar }));
  }

  const changeName = name => {
    setUser(prevState => ({ ...prevState, name: name || prevState.name }));
  }

  return (
    <div className='app'>
      <TwitterContext.Provider value={{
        user, stats, changeAvatar, changeName
      }}>
        <Navigation />
        <Body />
      </TwitterContext.Provider>
    </div>
  )
}

export default App
