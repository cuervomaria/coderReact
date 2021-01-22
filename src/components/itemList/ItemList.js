import React, {useState, useEffect}from "react";
// import { CardDeck } from "react-bootstrap";
import Item from "../item/Item";
import vinos from "../../assets/basesDeDatos/baseVinos";
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