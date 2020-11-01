function mountRegister(onRegister) {
    var container = mountContainer(`<section>
    <h2> Register here for actual information <br> of covid cases </h2>
    <form class="register__form">
        <input class="input1" type="text" name="fullname" placeholder="fullname" _required>
        <input type="email" name="e-mail" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="password" name="repassword" placeholder="repeat password" required>
        <button class="register__button2">Register</button>
    </form>
</section>`)

    var form = container.querySelector('.register__form')

    // form.addEventListener('submit', function(event) { ... })
    form.onsubmit = function (event) {
        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value

        try {
            onRegister(fullname, email, password, repassword)
        } catch (error) {
            alert(error.message)
        }
    }

    return container
}

