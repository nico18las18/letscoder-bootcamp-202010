import React from 'react'
import './Home.sass'


function Home({ onHome }) {
    return <sections>

        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHome(product)
        }}>
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
            <button className="homebuttons">Regístrate</button>
            <button className="homebuttons">Entra</button>
        </form>
        <h3>¿Qué alimento quieres hoy?</h3>
    
            <div>
               <button className="tags">Cebolla</button> 
               <button className="tags">Tomate</button> 
               <button className="tags">Lechuga</button> 
               <button className="tags">Pepino</button> 
               <button className="tags">Pimiento</button> 
            </div>


    </sections>

}

export default Home