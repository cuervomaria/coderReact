import React from "react";

const Item = (producto)=>{
    return (
        <div>
            <img src={producto.img} alt={`${producto.linea}-${producto.varietal}`} />
            
            <h3>{producto.linea}-{producto.varietal}</h3>
            <p>{producto.finca? producto.finca : 
                    producto.zona? producto.zona : null}
            </p>
            <p>${producto.precio}</p>
        </div>

    )
}

export default Item