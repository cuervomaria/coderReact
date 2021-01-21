import React, {useState, useEffect} from "react";
import vinos from "../../assets/basesDeDatos/baseVinos"
import ItemDetail from "../itemDetail/ItemDetail";

const id=5

const [item, setItem] = useState({})

setTimeout(() => {
    
    const getItems = new Promise ((success, reject)=>{
        success(vinos)
    })
    getItems.then((listadoProductos)=>{
        let index = listadoProductos.findIndex(producto => producto.id===id)
        console.log(index)
        setItem(listadoProductos[index])
        console.log(item)
       return item
    
    }) .catch (err => {
        console.log (`Se produjo el siguiente error: ${err}`)
    })
    
}, 2000);

//---------------------------------

// const getItems = () =>{
    
//     const [item, setItem] = useState({})


// setTimeout(() => {
//     const getProduct = new Promise ((success, reject)=>{
//         success(vinos)
//     })
//     getProduct.then((listadoProductos)=>{
//         let index = listadoProductos.findIndex(producto => producto.id===id)
//         console.log(index)
//         setItem(listadoProductos[index])
//         console.log(item)
//        return item
    
//     }) .catch (err => {
//         console.log (`Se produjo el siguiente error: ${err}`)
//     })
    
// }, 2000);
// }

const ItemDetailContainer = () => {


    
    return (
        <div>Item Detail container

            <ItemDetail producto={item}/>
        </div>


    )
}

export default ItemDetailContainer