import React from "react";
import Item from "../item/Item";
import vinos from "./baseVinos";

const ItemList = () =>{
    const catalogoProductos = vinos.map((vino) =>{
        return(<Item key={vino.id} producto={vino}/>)

    })

    return(

        <div>
            {catalogoProductos}
        </div>
        
    )
}

export default ItemList