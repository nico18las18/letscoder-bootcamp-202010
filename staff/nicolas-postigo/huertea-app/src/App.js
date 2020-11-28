import './App.css';
import { Register, Login } from './components'
import Home from './components/Home';
import { useState } from 'react'
import { registerUser } from './logic'

function App() {
  const[view, setView] = useState('register')



  const handleRegister = (fullname, email, password) => {
    console.log(fullname, email, password)

    setView('login')
  }

  const handleLogin = (email, password) => {
    console.log(email, password)

    setView('home')
  }

  return (
    <div className="App">
      <header className="App-header">
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login onLogin={handleLogin}/>}
        {view === 'home' && <Home />}
      </header>
    </div>
  );
}

export default App;
