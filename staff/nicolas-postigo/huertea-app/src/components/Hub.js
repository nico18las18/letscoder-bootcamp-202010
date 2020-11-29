import React from 'react'
import './Hub.sass'


function Hub({ onHub, onGoCreateoffer }) {
    return <sections>

        <form className="search_form" onSubmit={function (event) {
            event.preventDefault()
            var product = event.target.query.value
            onHub(product)
        }}>
            <input className="searcher" type="text" name="query" placeholder="🔍 Busca en huertea" />
        </form>
        <h3>¿Qué alimento quieres hoy?</h3>
    
            <div>
               <button onClick={onGoCreateoffer} className="offer">crea tu oferta &#127806;</button> 
            </div>


    </sections>

}

export default Hub