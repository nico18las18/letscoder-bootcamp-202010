function mountAccess(onRegister, onLogin) {
    var container = mountContainer(`<div>
    <section class="section__main">
        <button class="register__button">Register</button>
        <button class="login__button">Login</button>
    </section>
</div>`)

    var register = container.querySelector('.register__button')

    register.onclick = onRegister

    var login = container.querySelector('.login__button')

    login.onclick = onLogin

    return container
}