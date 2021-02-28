import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import { getFirestore } from "../../firebase/index"
import TablaResumen from "../../components/tablaResumen/TablaResumen";
import BusquedaInexistente, {  } from "../../components/busquedaInexistente/BusquedaInexistente";
import Loading from "../../components/loading/Loading";

// Permite realizar una consulta sobre el estado y detalle de una orden de compra ya generada.
//Al comenzar muestra un input donde se debe ingresar el número de orden. Con dicho número realiza una búsqueda en la base de datos y guarda la información de la misma en un estado interno.
//Finalmente hidrata el componente TablaResumen con los datos obtenidos de la consulta.
//Si no encuentra el número de orden ingresado, muestra un mensaje al respecto.

export default function OrderCheckContainer() {

    const [orderId, setOrderId] = useState("")
    const [ordenConsultada, setOrdenConsultada] = useState({})
    const [texto, setTexto] = useState("")
    const [orderExists, setOrderExists] = useState()
    const [loading, setLoading] = useState(false)
    

    //guarda el valor ingresado en el input en el estado OrderId, luego lo utiliza para hacer la búsqueda en el servidor.
    const handleOrderIdChange = (e) => {
        setOrderId(e.target.value)
    }

    const handleConsulta = () => {
        setLoading(true)
        const orderDb = getFirestore().collection("orders")
        const orderDoc = orderDb.doc(orderId)
        orderDoc.get()
            .then((order) => {
                if(!order.exists){
                    console.log("error", "orden inexistente")
                    setOrderExists(false)
                    setTexto("El número de orden ingresado es incorrecto, por favor vuelva a intentarlo")
                    return
                } else {
                setOrdenConsultada(order.data())}
                setOrderExists(true)
               
             }).finally(()=>setLoading(false))
    }

    return (
        <Container className="mt-4">
        <div>
            <label className="mr-3">Ingrese su número de orden</label>
            <input onBlur={handleOrderIdChange} name="numeroOrden" type="text" />
            <button onClick={handleConsulta}>Consultar</button>

            { loading? 
            <Loading padTop={true}/>
                :
            orderExists ?
              <div className="mt-3">
              <br/>
              <h3>{ordenConsultada.buyer.name}, su orden {orderId} se encuentra en estado {ordenConsultada.estado} </h3>
              <br/>
              <TablaResumen  array={ordenConsultada.items} cantidadTotal={ordenConsultada.cantidadTotal} total={ordenConsultada.total} ></TablaResumen>
              </div>
              :
              <BusquedaInexistente texto={texto}/>
          
            }

        </div>
        </Container>
    )
}
