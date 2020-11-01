function mountWelcome() {
    Component.call(this, `<section>
    <h2>WELCOME</h2>

<iframe width="350" height="300" src="https://www.youtube.com/embed/78jLBNSqc3g?rel=0&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>`)
}

Welcome.prototype = Object.create(Component.prototype)
Welcome.prototype.constructor = Welcome