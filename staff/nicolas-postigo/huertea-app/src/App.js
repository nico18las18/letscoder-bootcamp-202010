import './App.css';
import { Register, Login } from './components'
import Home from './components/Home';
import { useState } from 'react'
import { registerUser } from './logic'

function App() {
  const[view, setView] = useState('register')



  const handleRegister = (fullname, email, password) => {
    registerUser(fullname, email, password, error => {

    })

    setView('login')
  }


  return (
    <div className="App">
      <header className="App-header">
        {view === 'register' && <Register onRegister={handleRegister} />}
        {view === 'login' && <Login />}
      </header>
    </div>
  );
}

export default App;
