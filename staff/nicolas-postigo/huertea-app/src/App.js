import './App.css';
import { Register, Login, Hub, Home, Createoffer } from './components'
import { useState } from 'react'
import { registerUser } from './logic'

function App() {
  const[view, setView] = useState('home')

  const handleGoToRegister = () => {
    console.log('fue bien')

    setView('register')
  }

  const handleGoToLogin = () => {
    console.log('fue bien')

    setView('login')
  }

  const handleShowOffers = () => {
    setView('home')
  }


  const handleRegister = (fullname, email, password) => {
    console.log(fullname, email, password)

    setView('login')
  }

  const handleLogin = (email, password) => {
    console.log(email, password)

    setView('hub')
  }

  const handleGoCreateoffer = () => {
    setView('createoffer')
  }

  const handleGoHub = () => {
    console.log('fue bien')

    setView('hub')
  }

  const handleCreateOffer = (offername, image, location) => {
    console.log(offername, image, location)

    setView('hub')
  }

  return (
    <div className="App">
      <header className="App-header">
        {view === 'home' && <Home onGoRegister={handleGoToRegister} onGoLogin={handleGoToLogin} onHome={handleShowOffers}/>}
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin}/>}
        {view === 'hub' && <Hub onGoCreateoffer={handleGoCreateoffer}/>}
        {view === 'createoffer' && <Createoffer backHub={handleGoHub} onCreateoffer={handleCreateOffer}/>}
      </header>
    </div>
  );
}

export default App;
