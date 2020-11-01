function mountContainer(template) {
    var temp = document.createElement('container')

    temp.innerHTML = template

    var container = temp.firstChild

    return container
}