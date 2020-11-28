import React from 'react'
import './Register.sass'

function Register() {
    return <sections>
        <h2>Únete a huertea</h2>
        <form>
            <input type="text" name="fullname" placeholde="nombre" />
            <input type="email" name="email" placeholde="e-mail" />
            <input type="password" name="password" placeholde="contraseña" />
            <button>Entrar</button>
        </form>

    </sections>

}

export default Register