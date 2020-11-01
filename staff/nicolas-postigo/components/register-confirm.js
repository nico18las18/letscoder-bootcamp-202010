function RegisterConfirm(onLogin) {
    Component.call(this, `<div>
    <section class= "register__confirm">User succesfully registered. Proceed to <button class="register__confirm__button"> Login </button>
    </section>
    </div>`)

    var login = this.container.querySelector('.register__confirm__button')

    // login.addEventListener('click', onLogin)
    login.onclick = onLogin
}

RegisterConfirm.prototype = Object.create(Component.prototype)
RegisterConfirm.prototype.constructor = RegisterConfirm