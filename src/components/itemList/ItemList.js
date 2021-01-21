import React, {useState, useEffect}from "react";
// import { CardDeck } from "react-bootstrap";
import Item from "../item/Item";
import vinos from "../../assets/basesDeDatos/baseVinos";
import "./itemList.css"


const ItemList = () =>{

    const [productos, setProductos] = useState ([])
    
    useEffect(() => {
        setTimeout(() => {
            const traerProductosBD= new Promise ((resolve,reject)=>{
                resolve(vinos)
                
        
            })
                traerProductosBD.then( (resultado) => {
                    console.log(resultado)
                    setProductos(resultado)
                    console.log(productos)
                    return productos  //porqué no imprime el array completo en la consola?
                })
                .catch(err=>{console.log(`El error es ${err}`)})
                
                
        }, 2000);
            
    }, [])
    
    
    const catalogoProductos = productos.map((vino) =>{
        return(<Item key={vino.id} producto={vino}/>)

    })

    return(
        

        <div className="contenedorTarjeta">
            {catalogoProductos}
        </div>
      
        
    )
}

export default ItemList