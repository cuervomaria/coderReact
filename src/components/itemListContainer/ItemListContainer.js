import React, { useState, useEffect } from "react"
import "./itemListContainer.css"
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/index"
// import vinos from "../../assets/basesDeDatos/baseVinos"
// import ItemCount from "../itemCount/ItemCount"
import ItemList from "../itemList/ItemList"

const ItemListContainer = ({ greetings }) => {

    //     const [productos, setProductos] = useState ([])


    //     useEffect(() => {

    //             const traerProductosBD= new Promise ((resolve,reject)=>{
    //                 setTimeout(() => {
    //                 resolve(vinos) }, 2000);


    //             })
    //                 traerProductosBD.then( (resultado) => {
    //                     console.log(resultado)
    //                     //const productosFiltrados = resultado.filter(vino=>vino.linea=category)
    //                     //console.log(productosFiltrados)
    //                     //setProductos(productosFiltrados)
    //                     setProductos(resultado)
    //                     setTimeout(() => {
    //                         console.log(productos)  
    //                     }, 2000); 

    //                     return productos  //porqué no imprime el array completo en la consola?
    //                 })
    //                 .catch(err=>{console.log(`El error es ${err}`)})

    //     }, [])

    //     const {categoryId}=useParams()
    //     // const categoryId="Cobos"

    //     useEffect(() => {
    //         console.log({categoryId})

    //     }, [categoryId])


    //     useEffect(() => {

    //          const traerProductosBD= new Promise ((resolve,reject)=>{
    //              setTimeout(() => {
    //              resolve(vinos) }, 2000);


    //          })
    //              traerProductosBD.then( (resultado) => {
    //                  console.log(resultado)
    //                 const productosFiltrados = resultado.filter(vino=>vino.linea===categoryId)
    //                 setTimeout(() => {
    //                     console.log(productosFiltrados)
    //                 }, 2000); 
    //                 setProductos(productosFiltrados)
    //                 setTimeout(() => {
    //                     console.log(productos)  
    //                 }, 4000); 

    //                 return productos  //porqué no imprime el array completo en la consola?
    //              })
    //              .catch(err=>{console.log(`El error es ${err}`)})

    // },[categoryId])

    //la Solución de arriba Funciona, pero.... si quiero volver al home no vuelve....--------------


    // ----------------- PRUEBA SOLUCION 2 ------------------

    // const [productos, setProductos] = useState ([])
    // const {categoryId}=useParams()


    // useEffect(() => {
    //     console.log({categoryId})

    // }, [categoryId])


    // useEffect(() => {

    //         const traerProductosBD= new Promise ((resolve,reject)=>{
    //             setTimeout(() => {
    //             resolve(vinos) }, 2000);


    //         })
    //             traerProductosBD.then( (resultado) => {
    //                 console.log(resultado)
    //                 if(categoryId === undefined){
    //                     setProductos(resultado)
    //                     setTimeout(() => {
    //                         console.log(productos)  
    //                     }, 2000); 
    //                 } else {
    //                     const productosFiltrados = resultado.filter(vino=>vino.linea===categoryId)
    //                     setTimeout(() => {
    //                     console.log(productosFiltrados)
    //                     }, 2000); 
    //                     setProductos(productosFiltrados)
    //                     setTimeout(() => {
    //                     console.log(productos)  
    //                     }, 4000); 
    //                 }

    //                 return productos  //porqué no imprime el array completo en la consola?
    //             })
    //             .catch(err=>{console.log(`El error es ${err}`)})

    // }, [categoryId])

    //------------------------ FIREBASE ------------------------//

    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        console.log("categoryID", { categoryId })

        if (categoryId === undefined) {

            const db = getFirestore();
            const itemsFirebase = db.collection("vinos")
            itemsFirebase.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size === 0) {
                        console.log("No hay items")
                    }
                    let arrayItems = querySnapshot.docs.map(doc => {
                        return ({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    console.log(arrayItems)
                    setProductos(arrayItems)
                })
        }

        else {

            const db = getFirestore();
            const itemsFirebase = db.collection("vinos")
            const categoryItems = itemsFirebase.where("linea","==",categoryId)
            categoryItems.get()
                .then((queryFiltered) => {
                    console.log(queryFiltered)
                    if (queryFiltered.size === 0) {
                        console.log("No results")
                    }
                    let arrayFilteredItems = queryFiltered.docs.map(doc => {
                        return ({
                            id: doc.id,
                            ...doc.data()
                        })
                    })
                    console.log("arrayFilteredItems", arrayFilteredItems)
                    setProductos(arrayFilteredItems)
                })

        }
    }, [categoryId])

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsFirebase = db.collection("vinos")
    //     itemsFirebase.get()
    //         .then((querySnapshot) => {
    //             if (querySnapshot.size === 0) {
    //                 console.log("No hay items")
    //             }
    //             if (categoryId === undefined) {
    //                 let arrayItems = querySnapshot.docs.map(doc => {
    //                     return ({
    //                         id: doc.id,
    //                         ...doc.data()
    //                     })
    //                 })
    //                 console.log(arrayItems)
    //                 setProductos(arrayItems)
    //             } else {
    //                 const categoryItems = itemsFirebase.where("linea", "=", categoryId)
    //                 categoryItems.get()
    //                     .then((queryFiltered) => {
    //                         if (queryFiltered.size === 0) {
    //                             console.log("No results")
    //                         }
    //                         let arrayFilteredItems = queryFiltered.docs.map(doc => {
    //                             return ({
    //                                 id: doc.id,
    //                                 ...doc.data()
    //                             })
    //                         })
    //                         console.log("arrayFilteredItems", arrayFilteredItems)
    //                         setProductos(arrayFilteredItems)
    //                     })
    //             }
    //         })
    // }, [categoryId])





    return (
        <div className="container itemListContainer">
            <h4>{greetings}</h4>
            <br></br>
            <div>
                <ItemList bdVinos={productos} />
                {/* <ItemCount stock={5} initial={1}/> */}
            </div>
        </div>
    )
}

export default ItemListContainer