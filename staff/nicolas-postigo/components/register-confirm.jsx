function RegisterConfirm({onLogin}) {
    return <div><section className="register__confirm">
        User registered successfully, proceed to <button className="register__confirm__button" onClick={onLogin}>Login</button>.
</section></div>
} 

/*(`<div>
        <section class= "register__confirm">User succesfully registered. Proceed to <button class="register__confirm__button"> Login </button>
        </section>
        </div>`)*/