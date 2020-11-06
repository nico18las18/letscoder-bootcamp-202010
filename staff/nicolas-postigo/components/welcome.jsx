function Welcome({ name, image }) {
    return <section className="welcome">
        <h2 className="welcome">WELCOME<br></br>{name}!</h2>
        <img className="welcome__image" src={image || 'https://i.pinimg.com/originals/50/05/f5/5005f514424141acf70727360add163d.png'} />
    </section>
}