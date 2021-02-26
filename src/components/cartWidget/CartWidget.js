import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from "../../context/CartContext"
import "./cartWidget.css"

//Recibe por cartContext la información de los productos que están en el carrito. También recibe la cantidad Total de productos en el carrito. Si el carrito está vacío no se muestra, si tiene productos agregados se visualizan
//Es renderizado por el Navbar

const CartWidget = () => {

    const { cart, cantidadTotal } = useContext(CartContext)

    return (
        <div>
            {cart.length === 0 ? 
            "" 
            : 
            <Link to="../cart">
                <div className="cartWidgetLinks">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span> {`${cantidadTotal} Items`}</span>
                </div>
            </Link>}
        </div>
    )
}

export default CartWidget