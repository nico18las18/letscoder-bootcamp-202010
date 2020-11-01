function mountRegisterConfirm(onLogin) {
    var container = mountContainer(`<div>
    <section class= "register__confirm">User succesfully registered. Proceed to <button class="register__confirm__button"> Login </button>
    </section>
    </div>`)

    var login = container.querySelector('.register__confirm__button')

    // login.addEventListener('click', onLogin)
    login.onclick = onLogin

    return container
}

