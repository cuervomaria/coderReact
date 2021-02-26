import React from "react";
import Item from "../item/Item";
import "./itemList.css"

//Realiza el mapeo de todos los productos recibidos del ItemListContainer e hidrata el componente Item con los datos de cada producto (uno a la vez) para poder renderizar las tarjetas.


const ItemList = ({ bdVinos }) => {

    const catalogoProductos = bdVinos.map((vino) => {
        return (<Item key={vino.id} producto={vino} />)

    })

    return (
        <div className="contenedorTarjeta">
            {catalogoProductos}
        </div>
    )
}

export default ItemList