import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import vinos from "../../assets/basesDeDatos/baseVinos"
import { getFirestore } from "../../firebase/index"
import ItemDetail from "../itemDetail/ItemDetail";
import Loading from "../loading/Loading";
import BusquedaInexistente from "../busquedaInexistente/BusquedaInexistente"

//  const id = 5




const ItemDetailContainer = () => {
    const { id } = useParams()

    useEffect(() => {
        console.log({ id })
    }, [id])

    const [item, setItem] = useState({})
    const [idExists, setIdExists] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const db = getFirestore()
        const itemsFirebase = db.collection("vinos")
        const product = itemsFirebase.doc(id)
        product.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log("no existe el item")
                    setIdExists(false)
                    return
                }
                console.log("item found", doc)
                setIdExists(true)
                setItem({
                    id: doc.id,
                    ...doc.data()

                })
            }).catch((error) => {
                console.log("Error searching items", error)
            }).finally(()=>{
                setLoading(false)
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


    if (loading) {
        return <Loading padTop= {true} />
    }
    return (
        <React.Fragment>
            { idExists ? <ItemDetail producto={item} /> : <BusquedaInexistente texto="El producto seleccionado no existe"/>}
        </React.Fragment>
    )
}

export default ItemDetailContainer