import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index"
import ItemDetail from "../../components/itemDetail/ItemDetail";
import Loading from "../../components/loading/Loading";
import BusquedaInexistente from "../../components/busquedaInexistente/BusquedaInexistente"

//Trae por params el ID del producto que se está consultando. Busca en firestore el producto que tiene ese ID e hidrata el componente ItemDetail. Si no hay ningún producto que tenga dicho ID, muestra un cartel que el producto seleccionado no existe. Mientras busca en el servidor muestra un spinner de loading

const ItemDetailContainer = () => {
    const { id } = useParams()


    const [item, setItem] = useState({})
    const [idExists, setIdExists] = useState(true)
    const [loading, setLoading] = useState(false)

//  Hace la búsqueda en el servidor. Si no encuentra el item setea el estado interno de setIdExist en falso, para luego con un condicional retornar un cartel de producto erróneo. Si encuentra un ítem, lo setea en el estado Item para luego hidratar el ItemDetail y setea el estado interno ItemExist en true. Al comienzo de la busqueda setea el loding en true y al final en false.

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
                setIdExists(true)
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            }).catch((error) => {
                console.log("Error searching items", error)
            }).finally(() => {
                setLoading(false)
            })
    }, [id]);

    //Muestra el spinner si loading es true

    if (loading) {
        return <Loading padTop={true} />
    }

    //Muestra el producto seleccionado o el mensaje de error dependiendo del estado seteado en IdExist

    return (
        <React.Fragment>
            { idExists ? <ItemDetail producto={item} /> : <BusquedaInexistente texto="El producto seleccionado no existe" />}
        </React.Fragment>
    )
}

export default ItemDetailContainer