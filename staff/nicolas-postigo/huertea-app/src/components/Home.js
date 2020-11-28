import React from 'react'
import './Home.sass'


function Home({ onHome }) {
    return <sections>
        <div className="slidebar">
            <button className="homebuttons">Regístrate</button>
            <button className="homebuttons">Entra</button>
        </div>

        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHome(product)
        }}>
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
            <button className="searchtype" type="reset">❌</button>
            <button className="searchtype" type="submit">🔍</button>
        </form>
        <h3>¿Qué alimento quieres hoy?</h3>
    </sections>

}

export default Home