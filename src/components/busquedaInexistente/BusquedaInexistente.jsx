import React from 'react'
import "./busquedaInexistente.css"

export default function BusquedaInexistente({texto}) {
    return (
        <div className="busquedaInexistenteWrapper"> 
            <h3>{texto}</h3>            
        </div>
    )
}
