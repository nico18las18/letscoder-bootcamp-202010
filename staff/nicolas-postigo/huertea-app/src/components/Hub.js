import React from 'react'
import './Hub.sass'


function Hub({ onHub }) {
    return <sections>

        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHub(product)
        }}>
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
            <button className="hubbuttons">Regístrate</button>
            <button className="hubbuttons">Entra</button>
        </form>
        <h3>¿Qué alimento quieres hoy?</h3>
    
            <div>
               <button className="offer">crea tu oferta</button> 
            </div>


    </sections>

}

export default Hub