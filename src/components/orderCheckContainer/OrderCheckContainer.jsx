import React, { useState } from 'react'
import { getFirestore } from "../../firebase/index"
import TablaResumen from "../tablaResumen/TablaResumen";

export default function OrderCheckContainer() {

    const [orderId, setOrderId] = useState("")
    const [ordenConsultada, setOrdenConsultada] = useState({})


    const handleOrderIdChange = (e) => {
        setOrderId(e.target.value)
    }

    const handleConsulta = () => {

        const orderDb = getFirestore().collection("orders")
        const orderDoc = orderDb.doc(orderId)
        orderDoc.get()
            .then((order) => {
                console.log("ordenConsultada", ordenConsultada)
                console.log(order.data())
                setOrdenConsultada(order.data())
            })

    }

    return (

        <div>
            <label>Ingrese su número de orden  </label>

            <input onChange={handleOrderIdChange} name="numeroOrden" type="text" />
            <button onClick={handleConsulta}>Consultar</button>

            {Object.keys(ordenConsultada).length !== 0 &&
                <React.Fragment>
                    <br/>
                    <h3>{ordenConsultada.buyer.name}, su orden {orderId} se encuentra en estado {ordenConsultada.estado} </h3>
                    <br/>
                    <TablaResumen  array={ordenConsultada.items} cantidadTotal={ordenConsultada.cantidadTotal} total={ordenConsultada.total} ></TablaResumen>
                </React.Fragment>

            }

        </div>
    )
}
