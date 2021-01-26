import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import vinos from "../../assets/basesDeDatos/baseVinos"
import ItemDetail from "../itemDetail/ItemDetail";

//  const id = 5




const ItemDetailContainer = () => {
    const {id} = useParams()

    useEffect(() => {
        console.log({id})
        
    }, [id])
    const [item, setItem] = useState({})

    useEffect(() => {
        
            const getProduct = new Promise((success, reject) => {
                setTimeout(() => {
                    success(vinos)
                }, 2000);
            })
            getProduct.then((listadoProductos) => {
                let index = listadoProductos.findIndex(producto => producto.id === parseInt(id))
                console.log(index)
                setItem(listadoProductos[index])
                console.log(item)
                return item

            }).catch(err => {
                console.log(`Se produjo el siguiente error: ${err}`)
            })

      
    }, [])

  
    return (
       
            <ItemDetail producto={item} />
       
    )
}

export default ItemDetailContainer