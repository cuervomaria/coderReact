import React, { useState, useEffect } from "react"
import "./itemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index"
// import vinos from "../../assets/basesDeDatos/baseVinos"
// import ItemCount from "../itemCount/ItemCount"
import ItemList from "../itemList/ItemList"
import Loading from "../loading/Loading";
import BusquedaInexistente from "../busquedaInexistente/BusquedaInexistente"

const ItemListContainer2 = ({ greetings }) => {


    const [productos, setProductos] = useState([])
    //const { categoryId } = useParams()
    const { categoryName } = useParams()
    const [idExists, setIdExists] = useState(true)
    const [loading, setLoading] = useState(false)
    const [texto, setTexto] = useState("")

    useEffect(() => {
        console.log("categoryName", { categoryName })
        setLoading(true)
        const db = getFirestore();

        if (categoryName === undefined) {
            const itemsFirebase = db.collection("vinos")
            itemsFirebase.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log("No hay items")
                        setIdExists(false)
                        setTexto("No hay productos para mostrar")
                    }
                    let arrayItems = querySnapshot.docs.map(doc => {
                        setIdExists(true)
                        return ({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    console.log(arrayItems)
                    setProductos(arrayItems)
                }).finally(() => {
                    setLoading(false)
                })
        }
        else {
            const dbCategory = db.collection("Category")
            const categoryId = dbCategory.where("name", "==", categoryName)
            categoryId.get()
                .then((categoryDoc) => {
                    console.log(categoryDoc)
                    if (categoryDoc.size === 0) {
                        console.log("No results")
                        setIdExists(false)
                        setTexto("La categoría seleccionada no existe")
                    } else {
                        console.log(categoryDoc.docs.id)
                        let categoryId = categoryDoc.docs.map(doc => doc.id)
                        console.log("categoryId", categoryId)
                        const itemsFirebase = db.collection("vinos")
                        // //const categoryItems = itemsFirebase.where("linea","==",categoryId)
                        const categoryItems = itemsFirebase.where("categoryId", "==", categoryId[0])
                        categoryItems.get()
                            .then((queryFiltered) => {
                                console.log(queryFiltered)
                                if (queryFiltered.size === 0) {
                                    console.log("No results")
                                    setIdExists(false)
                                    setTexto("No hay productos en la categoría seleccionada")
                                }
                                let arrayFilteredItems = queryFiltered.docs.map(doc => {
                                    setIdExists(true)
                                    return ({
                                        id: doc.id,
                                        ...doc.data()
                                    })
                                })
                                console.log("arrayFilteredItems", arrayFilteredItems)
                                setProductos(arrayFilteredItems)
                            })
                    }
                }).finally(() => {
                    setLoading(false)


                })
        }


    }, [categoryName])





    return (
        <div className="container itemListContainer">
            <h4>{greetings} item List container 2</h4>
            <br></br>
            <div>
                {loading ?
                    <Loading padTop={true} /> :
                    idExists ?
                        <ItemList bdVinos={productos} /> :
                        <BusquedaInexistente texto={texto} />
                }
                {/* <ItemCount stock={5} initial={1}/> */}
            </div>
        </div>
    )
}

export default ItemListContainer2