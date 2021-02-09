import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {CartContext} from "../../context/CartContext"
import "./cartWidget.css"

const CartWidget = () => {

    const {cart} = useContext(CartContext)
    
    const cantidadProductos = cart.reduce((acc,curr)=>{
        acc += curr.cantidad
        return acc

    },0)


    return (
        <div>
            {cart.length===0? "": <Link to="../cart">
                <div className="cartWidgetLinks">
            <FontAwesomeIcon icon={faShoppingCart} />
            
            <span> {`${cantidadProductos} Items`}</span>
            </div>
            </Link>}
            
        </div>
    )
}

export default CartWidget