import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../../context/CartContext"
import "./cartWidget.css"

const Carrito = () => {

    const {cart} = useContext(CartContext)
    
    const cantidadProductos = cart.reduce((acc,curr)=>{
        acc += curr.cantidad
        return acc

    },0)


    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} />

            <span>{cantidadProductos} Items</span>
        </div>
    )
}

export default Carrito