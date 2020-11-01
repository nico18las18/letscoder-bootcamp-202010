function Access(onRegister, onLogin) {
    Component.call(this, `<div>
    <section class="section__main">
        <button class="register__button">Register</button>
        <button class="login__button">Login</button>
    </section>
</div>`)

    var register = this.container.querySelector('.register__button')

    register.onclick = onRegister

    var login = this.container.querySelector('.login__button')

    login.onclick = onLogin
}

Access.prototype = Object.create(Component.prototype)
Access.prototype.constructor = Access