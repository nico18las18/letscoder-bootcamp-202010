import './App.css';
import { Register, Login, Hub, Home } from './components'
import { useState } from 'react'
import { registerUser } from './logic'

function App() {
  const[view, setView] = useState('home')

  const handleGoToRegister = () => {
    console.log('fue bien')

    setView('register')
  }

  const handleRegister = (fullname, email, password) => {
    console.log(fullname, email, password)

    setView('login')
  }

  const handleLogin = (email, password) => {
    console.log(email, password)

    setView('hub')
  }

  return (
    <div className="App">
      <header className="App-header">
        {view === 'home' && <Home onHome={handleGoToRegister} />}
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin}/>}
        {view === 'hub' && <Hub />}
      </header>
    </div>
  );
}

export default App;
