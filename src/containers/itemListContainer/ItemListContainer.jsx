import React, { useState, useEffect } from "react"
import "./itemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index"
import ItemList from "../../components/itemList/ItemList"
import Loading from "../../components/loading/Loading";
import BusquedaInexistente from "../../components/busquedaInexistente/BusquedaInexistente"

//Componente que muestra el listado de items. Si está en el home de todos los ítems, si está en una categoría específica muestra los ítems de dicha categoría. 
// En ambos casos realiza la búsqueda en el servidor de los ítems a mostrar y se los pasa al ItemList, quien es el encargado de hidratar las tarjetas que se muestran.
//Si la categoría no existe, o no existen ítems para dicha categoría muestra un cartel indicandolo.

const ItemListContainer = ({ greetings }) => {
    const [productos, setProductos] = useState([])
    const { categoryName } = useParams()
    const [idExists, setIdExists] = useState(true)
    const [loading, setLoading] = useState(false)
    const [texto, setTexto] = useState("")

    //Consulta a la base de datos cada vez que hay un cambio en la categoría que se recibe por Params. 
    //Si la categoría que recibe por params es undefined quiere decir que no se seleccionó ninguna categoría (está en el Home) y trae toda la colección de productos y los setea en el estado Productos.
    //Si tiene recibe categoría por Params, llama de la colección categoría los docs que coinciden con la categoría de la ruta. 
    //Si la llamada viene vacía quiere decir que la categoría no existe y muestra un texto al respecto. 
    //Sino trae los docs que coincide con la categoría seleccionada, guarda el ID de dicho doc/categoría en una variable y luego trae de la colección vinos todos los productos cuya categoría coincide con el ID de la categoría seleccionada.
    //Si el llamado viene vacío, quiere decir que no hay productos en dicha categoría y muestra un mensaje al respecto, sino trae todos los productos de dicha categoría y los setea en el estado Productos.
    useEffect(() => {
        console.log("categoryName", { categoryName })
        setLoading(true)
        const db = getFirestore();
        if (categoryName === undefined) {
            const itemsFirebase = db.collection("vinos").orderBy("precio")
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

            const categoryDocDb = db.collection("Category").where("name", "==", categoryName)
            categoryDocDb.get()
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
                        const categoryItems = db.collection("vinos").where("categoryId", "==", categoryId[0])
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

    //Renderiza el spinner si está cargando, una vez que realiza la búsqueda en el servidor, renderiza el itemList hidratado con los productos que obtuvo en la consulta. Si algo falla en la consulta (categoría inexistente, o si no hubiese productos en una categoría), muestra un mensaje al respecto.
    return (
        <div className="container itemListContainer">
            <h4>{greetings}</h4>
            <br></br>
            <div>
                {loading ?
                    <Loading padTop={true} /> :
                    idExists ?
                        <ItemList bdVinos={productos} /> :
                        <BusquedaInexistente texto={texto} />
                }
            </div>
        </div>
    )
}

export default ItemListContainer