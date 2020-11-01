function Login(onLogin) {
    Component.call(this, `<section>
    <h2> LOGIN </h2>
    <form class="login__form">
        <input type="email" name="e-mail" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <button class="login__button">Login</button>
    </form>
</section>`)

    var form = this.container.querySelector('.login__form')

    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var email = inputs[0].value
        var password = inputs[1].value

        try {
            onLogin(email, password)
        } catch (error) {
            alert(error.message)
        }
    }
}

Login.prototype = Object.create(Component.prototype)
Login.prototype.constructor = Login