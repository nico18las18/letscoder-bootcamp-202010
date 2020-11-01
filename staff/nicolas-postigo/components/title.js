function Title(onHome) {
    Component.call(this, `<div class="container">
    <img class= "logo" src="images/covid_logo.svg" alt="">
    <div>`)

    this.container.onclick = onHome
}

Title.prototype = Object.create(Component.prototype)
Title.prototype.constructor = Title