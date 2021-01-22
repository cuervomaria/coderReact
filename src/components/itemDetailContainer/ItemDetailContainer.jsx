import React, { useState, useEffect } from "react";
import vinos from "../../assets/basesDeDatos/baseVinos"
import ItemDetail from "../itemDetail/ItemDetail";

const id = 5

const [item, setItem] = useState({})

    
        const getProduct = new Promise((success, reject) => {
                setTimeout(() => {
                success(vinos)
            }, 2000);
        })
        getProduct.then((listadoProductos) => {
            let index = listadoProductos.findIndex(producto => producto.id === id)
            console.log(index)
            setItem(listadoProductos[index])
            console.log(item)
            return item

        }).catch(err => {
            console.log(`Se produjo el siguiente error: ${err}`)
        })

  





const ItemDetailContainer = () => {

    // const [item, setItem] = useState({})

    // useEffect(() => {
        
    //         const getProduct = new Promise((success, reject) => {
    //             setTimeout(() => {
    //                 success(vinos)
    //             }, 2000);
    //         })
    //         getProduct.then((listadoProductos) => {
    //             let index = listadoProductos.findIndex(producto => producto.id === id)
    //             console.log(index)
    //             setItem(listadoProductos[index])
    //             console.log(item)
    //             return item

    //         }).catch(err => {
    //             console.log(`Se produjo el siguiente error: ${err}`)
    //         })

      
    // }, [])

  

    

    return (
        <div>Item Detail container

            <ItemDetail producto={item} />
        </div>


    )
}

export default ItemDetailContainer