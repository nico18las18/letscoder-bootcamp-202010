import './App.css';
import { Register, Login } from './components'
import Home from './components/Home';


function App() {
  const handleRegister = (fullname, email, password) => {
    console.log(fullname, email, password)
  }
  return (
    <div className="App">
      <header className="App-header">
{/*         <Register onSubmit={handleRegister} />
        <Login /> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
