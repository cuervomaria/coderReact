import React from "react";
// import { CardDeck } from "react-bootstrap";
import Item from "../item/Item";
import "./itemList.css"


const ItemList = ({bdVinos}) =>{

    
    
    const catalogoProductos = bdVinos.map((vino) =>{
        return(<Item key={vino.id} producto={vino}/>)

    })

    return(
        

        <div className="contenedorTarjeta">
            {catalogoProductos}
        </div>
      
        
    )
}

export default ItemList