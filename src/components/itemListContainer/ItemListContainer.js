import React, {useState, useEffect} from "react"
import "./itemListContainer.css"
import vinos from "../../assets/basesDeDatos/baseVinos"
// import ItemCount from "../itemCount/ItemCount"
import ItemList from "../itemList/ItemList"

const ItemListContainer = ({ greetings }) => {

    const [productos, setProductos] = useState ([])
    
    useEffect(() => {
        
            const traerProductosBD= new Promise ((resolve,reject)=>{
                setTimeout(() => {
                resolve(vinos) }, 2000);
                
        
            })
                traerProductosBD.then( (resultado) => {
                    console.log(resultado)
                    setProductos(resultado)
                    console.log(productos)  
                                    
                    return productos  //porqué no imprime el array completo en la consola?
                })
                .catch(err=>{console.log(`El error es ${err}`)})
            
    }, [])
    


    return (
        <div className="container itemListContainer">
            <h4>{greetings}</h4>
            <br></br>
            <div>
            <ItemList bdVinos={productos}/>
            {/* <ItemCount stock={5} initial={1}/> */}
            </div>
        </div>
    )
}

export default ItemListContainer