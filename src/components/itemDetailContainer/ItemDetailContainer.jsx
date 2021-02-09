import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import vinos from "../../assets/basesDeDatos/baseVinos"
import { getFirestore } from "../../firebase/index"
import ItemDetail from "../itemDetail/ItemDetail";

//  const id = 5




const ItemDetailContainer = () => {
    const { id } = useParams()

    useEffect(() => {
        console.log({ id })
    }, [id])

    const [item, setItem] = useState({})

    useEffect(() => {
        const db = getFirestore()

        const itemsFirebase = db.collection("vinos")
        const product = itemsFirebase.doc(id)
        product.get()
            .then((doc)=>{
                if(!doc.exists){
                    console.log("no existe el item")
                    return
                }
                console.log("item found", doc)
                setItem({
                    id:doc.id,
                    ...doc.data()
                
                })
            }).catch((error)=>{
                console.log("Error searching items", error)
            })
        
        
    }, []);

    // useEffect(() => {

    //     const getProduct = new Promise((success, reject) => {
    //         setTimeout(() => {
    //             success(vinos)
    //         }, 2000);
    //     })

    //     getProduct.then((listadoProductos) => {
    //         let index = listadoProductos.findIndex(producto => producto.id === parseInt(id))
    //         console.log(index)
    //         setItem(listadoProductos[index])
    //         console.log(item)
    //         return item

    //     }).catch(err => {
    //         console.log(`Se produjo el siguiente error: ${err}`)
    //     })
    // }, [])


    return (

        <ItemDetail producto={item} />

    )
}

export default ItemDetailContainer