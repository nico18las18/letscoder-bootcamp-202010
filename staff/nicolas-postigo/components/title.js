function mountTitle(onHome) {
    var container = mountContainer(`<img class= "logo" src="images/covid_logo.svg" alt="">`)

    container.onclick = onHome

    return container
}

