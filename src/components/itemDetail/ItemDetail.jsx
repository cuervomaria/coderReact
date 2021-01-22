import React from "react";
import "./itemDetail.css"

const ItemDetail = ({producto})=>{
    return(
        <div>
            <img src={producto.img} alt={`${producto.linea} - ${producto.varietal}`}/>
            <h3>{producto.linea}</h3>
            <h4>{producto.varietal}</h4>
            <p><b>Precio:</b>{`$ ${producto.precio}`}</p>
            <p><b>Descripción:</b>{`${producto.descripcion}`}</p>
            
        </div>

    )
}

export default ItemDetail