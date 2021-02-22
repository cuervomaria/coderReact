import React, { useState, useContext } from 'react'
import { getFirestore } from "../../firebase/index"
import firebase from "firebase/app"
import "@firebase/firestore"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext"
import Loading from "../loading/Loading";
import "./order.css"

export default function Order({ user }) {

    const [order, setOrder] = useState({})
    const [orderId, setOrderId] = useState("")
    const { cart, total, cantidadTotal, clearCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    // const handleConfirmar = () => {
    //     const newOrder = {
    //         buyer: user,
    //         items: cart,
    //         date: new Date(),
    //         total: total,
    //     }
    //     // console.log(Object.keys(order).length !== 0)
    //     setOrder(newOrder)
    // }

    const handleStock = () => {
        
        cart.forEach(item => {
            
            const documentoItem = getFirestore().collection("vinos").doc(item.id)
            documentoItem.get()
                .then((doc)=>{
                    console.log("data", doc.data())
            const itemStock= doc.data().stock
            console.log("itemStock", itemStock)
            documentoItem.update({stock:itemStock- item.cantidad})})
        });

    }


    const handleConfirmar = () => {
        setLoading(true)
        const db = getFirestore()
        const orders = db.collection("orders");
        const newOrder = {
            buyer: user,
            items: cart,
            //date: new Date(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total,
        }
        // console.log(Object.keys(order).length !== 0)
        setOrder(newOrder)
        orders.add(newOrder)

            .then(({ id }) => {
                console.log(id)
                setOrderId(id);
                handleStock()
                clearCart()
            }).catch(err => {
                console.log("error", err)
            })
            .finally(()=>{
               // setTimeout(() => {
                   setLoading(false)    
                //}, 2000);
                
            })
            console.log("order", order)
            console.log("orderID", orderId)
            console.log("fecha", order.date)
    }

    return (
        <div className="wrapper">
            {Object.keys(order).length === 0 ?
                <div className="orderWrapper">
                    <h3>{user.name} este es el resumen de la compra que está por realizar</h3>
                    <div>
                    <h5>Cantidad de productos: {cantidadTotal}</h5>
                    <h5>Total: ${total}</h5>
                    </div>
                    <button onClick={handleConfirmar}>Confirmar compra</button>
                </div>
                :
                <div className="orderWrapper">
                    <h3> {user.name}, muchas gracias por su compra </h3>
                    <div>
                    <h4> Su orden de compra es: </h4>
                     { loading ? <Loading padTop={false} /> : <h4>{orderId}</h4> } 
                    </div>
                    <Link to="../"> <Button variant="outline-dark">Volver al Home </Button></Link>
                </div>
            }
         
        </div>
    )
}
