import React, { useState, useContext } from 'react'
import { getFirestore } from "../../firebase/index"
import firebase from "firebase/app"
import "@firebase/firestore"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import Loading from "../loading/Loading";
import "./order.css"

//Componente que muestra un breve resumen de la compra (cantidad de productos y monto total) y solicita confirmación de compra.
//Es renderizado por el CheckoutContainer que le pasa el objeto user con los datos del comprador.
//Al confirmar la compra envía el objeto order a la base de datos, descuenta del stock los productos comprados y arroja como resultado el número de orden generado.

export default function Order({ user }) {

    const [order, setOrder] = useState({})
    const [orderId, setOrderId] = useState("")
    const { cart, total, cantidadTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    //Función que descuenta del stock la cantidad de productos comprados. Va recorriendo todos los productos del carrito, busca en la base de datos de firestore el documento que coincide con el ID del producto. Guarda el dato de stock de ese producto en una variable itemStock y luego actualiza dicho valor restándole la cantidad comprada en el cart. Itera con todos los items del carrito.

    const handleStock = () => {
        cart.forEach(item => {
            const documentoItem = getFirestore().collection("vinos").doc(item.id)
            documentoItem.get()
                .then((doc) => {
                    const itemStock = doc.data().stock
                    documentoItem.update({ stock: itemStock - item.cantidad })
                })
        });

    }

    //Al confirmar la compra se crea el objeto newOrder con la información de los productos del carrito y del comprador y se agrega a la colección orders de firestore. Si se logra de manera satisfactoria, baja el stock de los productos, borra el carrito y setea en un estado orderId el número de orden generado.

    const handleConfirmar = () => {
        setLoading(true)
        const db = getFirestore()
        const orders = db.collection("orders");
        const newOrder = {
            buyer: user,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
            cantidadTotal: cantidadTotal,
            estado: "Generada"
        }
        setOrder(newOrder)
        orders.add(newOrder)
            .then(({ id }) => {
                setOrderId(id);
                handleStock()
                clearCart()
            }).catch(err => {
                console.log("error", err)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    //Si la orden no ha sido aún confirmada muestra el resumen de la compra y el botón de confirmar. Al confirmar, dispara la función handleConfirmar, oculta el resumen y muestra un mensaje de agradecimiento por la comra con el ID de la orden de compra generada.
    return (
        <div className="wrapper">
            {Object.keys(order).length === 0 ?
                <div className="orderWrapper">
                    <h3>{user.name} este es el resumen de la compra que está por realizar</h3>
                    <div>
                        <h5>Cantidad de productos: {cantidadTotal}</h5>
                        <h5>Total: $ {new Intl.NumberFormat("de-DE").format(total)} </h5>
                    </div>
                    <button onClick={handleConfirmar}>Confirmar compra</button>
                </div>
                :
                <div className="orderWrapper">
                    <h3> {user.name}, muchas gracias por su compra </h3>
                    <div>
                        <h4> Su orden de compra es: </h4>
                        {loading ? <Loading padTop={false} /> : <h4>{orderId}</h4>}
                    </div>
                    <Link to="../"> <Button variant="outline-dark">Volver al Home </Button></Link>
                </div>
            }

        </div>
    )
}
