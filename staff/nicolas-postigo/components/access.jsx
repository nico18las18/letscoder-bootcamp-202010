function Access({ onRegister, onLogin }) {
    return <section className="access">
        <button className="register__button" onClick={onRegister}>Register</button> <button className="login__button" onClick={onLogin}>Login</button>
    </section>
} 
